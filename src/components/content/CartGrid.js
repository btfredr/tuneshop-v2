import CartItem from "./CartItem";

export const CartGrid = ({ products, cartItems }) => {
  const getTotal = () => {
    return cartItems.reduce((sum, { price }) => sum + price, 0);
  };

  const handleClear = () => {
    window.localStorage.removeItem("cartItems");
    alert("Cart has been cleared");
  };

  if (cartItems.length === 0) {
    return <h1>Cart is empty.</h1>;
  } else {
    return (
      <>
        <button className="cart__btn" onClick={handleClear}>
          Clear cart
        </button>
        <section className="cart">
          {products.map((product) => (
            <CartItem key={product.id} product={product}></CartItem>
          ))}
        </section>
        <div className="cart__total">Total Cost: ${getTotal()}</div>
      </>
    );
  }
};
