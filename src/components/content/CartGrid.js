import CartItem from "./CartItem";

export const CartGrid = ({ products }) => {
  return (
    <section className="products">
      {products.map((product) => (
        <CartItem key={product.id} product={product}></CartItem>
      ))}
    </section>
  );
};
