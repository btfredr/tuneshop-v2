import CartItem from "./CartItem";

export const CartGrid = ({ products, cartItems }) => {
  if (cartItems.length === 0) {
    return <h1>Cart is empty.</h1>;
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
