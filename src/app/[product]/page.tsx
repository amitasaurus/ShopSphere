export default function Page({ params }: { params: { product: string } }) {
  return <div>Product: {params.product}</div>;
}
