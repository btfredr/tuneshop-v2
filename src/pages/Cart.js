import useLocalStorage from "../utils/useLocalStorage";
import { CartGrid } from "../components/content/CartGrid";

const Cart = () => {
  const [cartItems] = useLocalStorage("cartItems", []);

  const itemManagement = () => {
    if (!cartItems) {
      return [];
    } else {
      const getItemsFromCart = JSON.parse(localStorage.getItem("cartItems"));
    }
  };

  return (
    <div className="container">
      <h2>Cart</h2>
      <button onClick={() => window.localStorage.removeItem("cartItems")}>
        Clear cart
      </button>
      <CartGrid products={cartItems} cartItems={cartItems} />
    </div>
  );
};

export default Cart;
