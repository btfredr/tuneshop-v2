const CartItem = ({ product }) => {
  return (
    <>
      <div className="cart__item">
        <img src={product.imageURL} alt={product.title} />
        <h4>{product.title}</h4>
        <div className="cart__content">
          <p>
            <strong>$ {product.price}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
