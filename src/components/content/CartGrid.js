import CartItem from "./CartItem";

export const CartGrid = ({ products, cartItems }) => {
  if (!cartItems) {
    return <h1>Cart is currently empty.</h1>;
  } else {
    return (
      <section className="cart">
        {products.map((product) => (
          <CartItem key={product.id} product={product}></CartItem>
        ))}
      </section>
    );
  }
};
