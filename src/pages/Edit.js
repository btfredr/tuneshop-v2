import { useState, useEffect, useContext } from "react";
import { EditGrid } from "../components/content/EditGrid";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router";

const Edit = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

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
      <h2>Edit Products</h2>
      <div className="container">
        <EditGrid isLoading={isLoading} products={products} />
      </div>
    </div>
  );
};

export default Edit;
