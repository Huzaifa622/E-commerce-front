import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import Stripe from "stripe";
const stripe = require("stripe")(process.env.STRIPE_SK);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("it should be post");
    return;
  }
  const { name, email, city, postalCode, country, address, cartProd } =
    req.body;

  await mongooseConnect();
  const productIds = cartProd;
  const uniqueIds = [...new Set(productIds)];
  const productInfos = await Product.find({ _id: uniqueIds });
  // const flet = products.f

  let line_items = [];
  for (const prodId of uniqueIds) {
    const productInfo = productInfos.find((p) => p._id.toString() == prodId);
    const quantity = productIds.filter((id) => id === prodId).length || 0;
    if (quantity && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: productInfo.price *100,
        },
      });
    }
  }

  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    address,
    postalCode,
    country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/cart?success=1",
    cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
    metadata: { orderId: orderDoc._id.toString() },
  });
  res.json({
    url: session.url,
  });
}
