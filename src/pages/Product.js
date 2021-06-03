import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const product = () => {
  const [product, setproduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const url = BASE_URL + "/products/" + id;

  useEffect(
    function () {
      async function fetchProduct() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            setproduct(json);
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
        <h2>{product.title}</h2>
        <div className="imageContainer">
          <div className="productImage">
            <img src={product.imageURL} alt={product.title} />
          </div>
        </div>
        <div className="product">
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default product;
