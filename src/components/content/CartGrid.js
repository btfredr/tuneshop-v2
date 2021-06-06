import CartItem from "./CartItem";

export const CartGrid = ({ products, cartItems }) => {
  const getTotal = () => {
    return cartItems.reduce((sum, { price }) => sum + price, 0);
  };

  if (cartItems.length === 0) {
    return <h1>Cart is empty.</h1>;
  } else {
    return (
      <section className="cart">
        {products.map((product) => (
          <CartItem key={product.id} product={product}></CartItem>
        ))}

        <div>Total Cost: ${getTotal()}</div>
      </section>
    );
  }
};
