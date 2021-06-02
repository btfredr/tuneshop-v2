import { useParams, useHistory } from "react-router-dom";
import useAxios from "../utils/useAxios";
import { useState, useEffect } from "react";
import { PRODUCT_PATH } from "../utils/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Add = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const http = useAxios();
  const history = useHistory();

  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        title: yup.string().required("Please enter a name"),
        price: yup.number().required("Please enter a price"),
        imageURL: yup.string().required("Please enter an image URL"),
        description: yup.string().required("Please enter a description"),
      })
    ),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setPostError(null);
    console.log(data);
    try {
      const response = await http.post(PRODUCT_PATH, data);
      console.log(response);
      setProduct(response.data);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
      history.push("/products");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await http.get(`${PRODUCT_PATH}/${id}`);
        console.log(response);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id, http]);
  return (
    <div className="container">
      <h2>Add new product</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {postError && <p>{postError}</p>}
        <fieldset disabled={submitting}>
          <div className="form__item">
            <label>Name</label>
            <input name="title" placeholder="Title" ref={register} />
            {errors.title && (
              <p className="form__error">{errors.title.message}</p>
            )}
          </div>

          <div className="form__item">
            <label>Price</label>
            <input
              name="price"
              placeholder="Price"
              ref={register}
              type="number"
            />
            {errors.price && (
              <p className="form__error">{errors.price.message}</p>
            )}
          </div>

          <div className="form__item">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Description"
              ref={register}
              type="text"
            />
            {errors.description && (
              <p className="form__error">{errors.description.message}</p>
            )}
          </div>

          <div className="form__item">
            <label>Image URL</label>
            <input
              name="imageURL"
              placeholder="Image URL"
              ref={register}
              type="text"
            />
            {errors.imageURL && (
              <p className="form__error">{errors.imageURL.message}</p>
            )}
          </div>

          <div className="form__item">
            <label>Featured</label>
            <input
              className="form__checkbox"
              name="featured"
              ref={register}
              type="checkbox"
            />
          </div>

          <button type="submit" className="form__btn">
            {submitting ? "Adding ..." : "Add"}
          </button>
        </fieldset>
      </form>
      {success ? <p>Listing of {product.title} was added</p> : null}
    </div>
  );
};

export default Add;
