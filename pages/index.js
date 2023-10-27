import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";

export default function HomePage({ feauturedProduct }) {
  // console.log(product)
  return (
    <>
      <Header />
      <Featured product = {feauturedProduct}/>
      <NewProducts/>
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "65339e3765f2f555b4f337e2";
  await mongooseConnect();
  const feauturedProduct = await Product.findById(featuredProductId);
  return {
    props: {
      feauturedProduct: JSON.parse(JSON.stringify(feauturedProduct)),
    },
  };
}
