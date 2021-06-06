import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "../utils/useAxios";

const DeleteButton = ({ id }) => {
  const [error, setError] = useState(null);
  const [render, setRender] = useState(false);

  const http = useAxios();
  const history = useHistory();

  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        await http.delete(`https://tuneshop.herokuapp.com/products/${id}`);
        alert("Product has been deleted succesfully.");
      } catch (error) {
        setError(error);
      } finally {
        setRender(render + 1);
        history.push("/products");
      }
    }
  }

  return (
    <button
      type="button"
      className="form__delete"
      onClick={() => handleDelete(id)}
    >
      {error ? "Error" : "Delete"}
    </button>
  );
};

export default DeleteButton;
