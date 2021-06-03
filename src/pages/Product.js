import { useState, useEffect } from "react";
import { PRODUCT_PATH } from "../utils/constants";
import { useParams } from "react-router-dom";
import AddProductToCart from "../components/AddProductToCart";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const url = PRODUCT_PATH + id;

  useEffect(
    function () {
      async function fetchProduct() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            setProduct(json);
          } else {
            setError("An error occurred");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setIsLoading(false);
        }
      }
      fetchProduct();
    },
    [url]
  );

  if (isLoading) {
    return <h1>Product is loading... Please wait</h1>;
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="detail">
          <div className="detail__image">
            <img src={product.imageURL} alt={product.title} />
          </div>
          <h2 className="detail__title">{product.title}</h2>
          <p>{product.description}</p>
          <AddProductToCart product={product} />
        </div>
      </div>
    </>
  );
};

export default Product;
