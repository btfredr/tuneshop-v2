import useLocalStorage from "../utils/useLocalStorage";
import { CartGrid } from "../components/content/CartGrid";

const Cart = () => {
  const [cartItems] = useLocalStorage("cartItems", []);

  if (!cartItems) {
    return [];
  } else {
    return (
      <div className="container">
        <h2 className="pageTitle">Cart</h2>
        <CartGrid products={cartItems} cartItems={cartItems} />
      </div>
    );
  }
};

export default Cart;
