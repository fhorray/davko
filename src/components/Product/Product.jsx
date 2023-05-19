import React from "react";
import AddButton from "../AddButton/AddButton";
import CartIcon from "../../assets/images/cart-icon.svg";
import { CartContext } from "../../context/cartContext";

const Product = (props) => {
  // PROPS
  const {
    id,
    image,
    isNew,
    hasDiscount,
    discountPercentage,
    title,
    price,
    oldPrice,
    inCart,
    color,
    size,
    quantity,
  } = props;

  const { totalItems } = React.useContext(CartContext);

  return (
    <div className={inCart ? "item in-cart" : "item out-cart"}>
      <div className="image-box">
        <img src={image} alt="Product Item" />

        {isNew ? <span className="new">New</span> : ""}
        {hasDiscount ? (
          <span className="discount-tag">-{discountPercentage}% OFF</span>
        ) : null}
      </div>

      <div className="info">
        <div className="product-info">
          <h3>{title}</h3>
          {inCart ? (
            <div className="size-color">
              <span>ID: {id}</span>
              <span>Color: {color[0]}</span>
              <span>Size: {size}</span>
            </div>
          ) : null}
        </div>
        <div className="price-info">
          {inCart ? <span className="quantity">{quantity}</span> : null}
          {inCart ? (
            <span className="value">${Math.floor(price * quantity)}</span>
          ) : (
            <span>${price}</span>
          )}
          {oldPrice ? <del>{"$ " + oldPrice}</del> : null}
        </div>
      </div>
    </div>
  );
};

export default Product;
