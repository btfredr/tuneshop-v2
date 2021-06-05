import useLocalStorage from "../utils/useLocalStorage";
import { CartGrid } from "../components/content/CartGrid";

const Cart = () => {
  const [cartItems] = useLocalStorage("cartItems", []);

  if (!cartItems) {
    return [];
  } else {
    return (
      <div className="container">
        <div className="cart">
          <h2 className="pageTitle">Cart</h2>
          <button
            className="cart__btn"
            onClick={() => window.localStorage.removeItem("cartItems")}
          >
            Clear cart
          </button>
          <CartGrid products={cartItems} cartItems={cartItems} />
        </div>
      </div>
    );
  }
};

export default Cart;
