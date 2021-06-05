import { Link } from "react-router-dom";

const EditItem = ({ product }) => {
  return (
    <>
      <div className="product">
        <img src={product.imageURL} alt={product.title} />
        <div className="product__content">
          <h4>{product.title}</h4>
          <p>
            <strong>$ {product.price}</strong>
          </p>
          <div className="product__btnContainer">
            <Link to={`/edit/${product.id}`} className="product__viewMore">
              Edit Product
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditItem;
