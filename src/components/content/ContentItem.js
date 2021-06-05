import { Link } from "react-router-dom";
import AddProductToCart from "../AddProductToCart";

const ContentItem = ({ product }) => {
  return (
    <>
      <div className="product">
        <img src={product.imageURL} alt={product.title} />
        <div className="product__content">
          <h4 className="product__title">{product.title}</h4>
          <p>
            <strong>$ {product.price}</strong>
          </p>
          <div className="product__btnContainer">
            <AddProductToCart product={product} />
            <Link to={`/product/${product.id}`} className="product__viewMore">
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
