import axios from "axios";
import { ContentGrid } from "../components/content/ContentGrid";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios("https://tuneshop.herokuapp.com/products");

      setProducts(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    getProducts();
  }, []);
  return (
    <div className="container">
      <ContentGrid isLoading={isLoading} products={products} />
    </div>
  );
};

export default Products;
