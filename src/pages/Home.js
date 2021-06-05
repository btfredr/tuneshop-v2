import { useEffect, useState } from "react";
import axios from "axios";
import { FeaturedGrid } from "../components/content/FeaturedGrid";

const Home = () => {
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
    <>
      <div className="imageContainer"></div>
      <div className="container">
        <h2 className="pageTitle">Featured Products</h2>
        <FeaturedGrid isLoading={isLoading} products={products} />
      </div>
    </>
  );
};

export default Home;
