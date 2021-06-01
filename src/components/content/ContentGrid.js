import ContentItem from "./ContentItem";

export const ContentGrid = ({ products, isLoading }) => {
  return isLoading ? (
    <h1>Content is loading... Please wait</h1>
  ) : (
    <section className="products">
      {products.map((product) => (
        <ContentItem key={product.id} product={product}></ContentItem>
      ))}
    </section>
  );
};
