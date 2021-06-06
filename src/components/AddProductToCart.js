import { useEffect } from "react";
import useLocalStorage from "../utils/useLocalStorage";

const AddProductToCart = ({ product }) => {
  const [items, setItems] = useLocalStorage("cartItems", []);

  const addToCart = (product) => {
    setItems([...items, product]);
    alert("Product has been added to cart");
  };

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  return (
    <button className="product__btn" onClick={() => addToCart(product)}>
      <i className="fas fa-shopping-cart" />
    </button>
  );
};

export default AddProductToCart;
