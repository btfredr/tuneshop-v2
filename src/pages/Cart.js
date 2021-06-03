import { useState } from "react";
import { CartGrid } from "../components/content/CartGrid";

const Cart = () => {
  const getItemsFromCart = JSON.parse(localStorage.getItem("cart" || "[]"));
  const [cartItems] = useState(getItemsFromCart);

  return (
    <>
      <h2>Cart</h2>
      <CartGrid products={cartItems} />
    </>
  );
};

export default Cart;
