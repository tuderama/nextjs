import { Metadata } from "next";
type Prop = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Prop): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
  };
};
export default async function Product({ params }: Prop) {
  const productId = (await params).productId;
  return <h1>Product detail {productId}</h1>;
}
