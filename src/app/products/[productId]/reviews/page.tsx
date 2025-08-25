export default async function ReviewList({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div>
      <h1>Product {productId}</h1>
      {Array.from({ length: Number(productId) }).map((_, index) => (
        <h2 key={index}>Review {index + 1}</h2>
      ))}
    </div>
  );
}
