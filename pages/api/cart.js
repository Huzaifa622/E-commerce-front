import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res){
const ids = req.body.ids;
await mongooseConnect();
res.send(await Product.find({_id:ids}))
}