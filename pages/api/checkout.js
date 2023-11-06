import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("it should be post");
    return;
  }
  const { name, email, city, postalCode, country, address, 
    products } =
    req.body;

  await mongooseConnect();
  const productIds = products.split(",");
  const uniqueIds = [...new Set(productIds)];
  const productInfos = await Product.find({ _id: uniqueIds });
  // const flet = products.f

  let items_list = [];
  for (const prodId of uniqueIds) {
    const productInfo = productInfos.find((p) => p._id.toString() == prodId);
    const quantity = productIds.filter(id => id === prodId).length || 0;
    if (quantity && productInfo) {
      items_list.push({
        quantity,
       Price_data :{
        currency: 'USD',
        product_data : {name: productInfo.title},
        unit_ammount: productInfo.price * quantity,
       }
      });
    }
  }

  await Order.create({
    list_items, name ,email,city , address, postalCode ,  country , paid:false 
  })
}
