import EditItem from "./EditItem";

export const EditGrid = ({ products, isLoading }) => {
  return isLoading ? (
    <h1>Content is loading... Please wait</h1>
  ) : (
    <section className="products">
      {products.map((product) => (
        <EditItem key={product.id} product={product}></EditItem>
      ))}
    </section>
  );
};
