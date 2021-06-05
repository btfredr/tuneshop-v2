import { useHistory, useParams } from "react-router-dom";
import useAxios from "../utils/useAxios";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthContext from "../context/AuthContext";

const EditProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const http = useAxios();
  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  const [submitting, setSubmitting] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        title: yup.string().required("Please enter a title"),
        price: yup.number().required("Please enter a price"),
        imageURL: yup.string().required("Please enter an image URL"),
        description: yup.string().required("Please enter a description"),
        heading: yup.string().required("Please enter a heading"),
      })
    ),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setUpdateError(null);
    console.log(data);
    try {
      const response = await http.put(
        `https://tuneshop.herokuapp.com/products/${id}`,
        data
      );
      console.log(response);
      setProduct(response.data);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setUpdateError(error.toString());
    } finally {
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await http.get(
          `https://tuneshop.herokuapp.com/products/${id}`
        );
        console.log(response);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="pageTitle">Edit {product.title}</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {updateError && <p>{updateError}</p>}
        <fieldset disabled={submitting}>
          <div>
            <input
              className="input"
              name="title"
              placeholder="Title"
              ref={register}
              defaultValue={product.title}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>

          <div>
            <input
              className="input"
              name="price"
              placeholder="Price"
              defaultValue={product.price}
              ref={register}
              type="number"
            />
            {errors.price && <p>{errors.price.message}</p>}
          </div>
          <div>
            <textarea
              className="input"
              name="description"
              placeholder="Description"
              defaultValue={product.description}
              ref={register}
              type="text"
            />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          <div>
            <input
              className="input"
              name="imageURL"
              placeholder="Image URL"
              ref={register}
              defaultValue={product.imageURL}
              type="text"
            />
            {errors.imageURL && <p>{errors.imageURL.message}</p>}
          </div>

          <div>
            <input
              className="input"
              name="heading"
              placeholder="Heading"
              ref={register}
              defaultValue={product.heading}
              type="text"
            />
            {errors.heading && <p>{errors.heading.message}</p>}
          </div>

          <div className="buttons">
            <button type="submit" className="update">
              {submitting ? "Updating ..." : "Update"}
            </button>
          </div>
        </fieldset>
      </form>
      {success ? <p>Listing of {product.title} was updated</p> : null}
    </div>
  );
};

export default EditProduct;
