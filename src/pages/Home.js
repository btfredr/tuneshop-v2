import { useEffect, useState } from "react";
import axios from "axios";
import { ContentGrid } from "../components/content/ContentGrid";

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
      <div>
        <h2>Home</h2>
      </div>
    </>
  );
};

export default Home;
