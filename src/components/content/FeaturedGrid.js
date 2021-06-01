import FeaturedItem from "./FeaturedItem";

export const FeaturedGrid = ({ products, isLoading }) => {
  const featuredProduct = products.filter((product) => product.featured);
  return isLoading ? (
    <h1>Please wait... Content is loading</h1>
  ) : (
    <section className="featuredProducts">
      {featuredProduct.map((product) => (
        <FeaturedItem key={product.id} product={product}></FeaturedItem>
      ))}
    </section>
  );
};
