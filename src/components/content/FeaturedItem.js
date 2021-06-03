import { Link } from "react-router-dom";
import AddProductToCart from "../AddProductToCart";

const FeaturedItem = ({ product }) => {
  return (
    <>
      <div className="featuredProduct">
        <img src={product.imageURL} alt={product.title} />
        <div className="featuredProduct__content">
          <h4>{product.title}</h4>
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

export default FeaturedItem;
