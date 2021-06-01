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
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;
