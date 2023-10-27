import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default function HomePage({ product }) {
  console.log(product)
  return (
    <>
      <Header />
      <Featured product = {product}/>
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "65339e3765f2f555b4f337e2";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
