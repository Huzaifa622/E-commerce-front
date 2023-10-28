import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";

export default function HomePage({ feauturedProduct , newProducts }) {
  console.log(newProducts)
  return (
    <>
      <Header />
      <Featured product = {feauturedProduct}/>
      <NewProducts products = {newProducts}/>
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "65339e3765f2f555b4f337e2";
  await mongooseConnect();
  const feauturedProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({} , null , {sort: {'id': -1} , limit: 10})
  return {
    props: {
      feauturedProduct: JSON.parse(JSON.stringify(feauturedProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    },
  };
}
