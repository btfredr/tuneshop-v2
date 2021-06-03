import { useState, useEffect } from "react";

const AddProductToCart = ({ product }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <button className="product__btn" onClick={() => addToCart(product)}>
      Add To Cart
    </button>
  );
};

export default AddProductToCart;
