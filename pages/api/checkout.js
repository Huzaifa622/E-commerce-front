import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("it should be post");
    return;
  }
  const { name, email, city, postalCode, country, address, products} =
    req.body;

  await mongooseConnect();
  const productIds = products.split(',');
  const uniqueIds = [...new Set(productIds)];
  const productInfos = await Product.find({ _id: uniqueIds });
  res.json(productIds)
  
}
