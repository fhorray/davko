import React from "react";
import ReactDOM from "react-dom";
import { CartContext } from "../../context/cartContext";

// FONTAWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

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

  const { addToCart, removeFromCart, removeOne } =
    React.useContext(CartContext);

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
          {inCart ? (
            <FontAwesomeIcon
              className="del-btn"
              icon={faTrashCan}
              onClick={() => removeFromCart({ id })}
            />
          ) : null}
          <h3>{title}</h3>
          {inCart ? (
            <div className="size-color">
              <span>ID: {id}</span>
              <span>Color: {color}</span>
              <span>Size: {size}</span>
            </div>
          ) : null}
        </div>
        <div className="price-info">
          {inCart ? (
            <span className="quantity">
              <FontAwesomeIcon
                className="angle left"
                icon={faAngleLeft}
                onClick={() => {
                  if (quantity > 1) {
                    removeOne({ id });
                  } else {
                    removeFromCart({ id });
                  }
                }}
              />
              {quantity}
              <FontAwesomeIcon
                className="angle right"
                icon={faAngleRight}
                onClick={() => addToCart({ ...props, quantity: 1 })}
              />
            </span>
          ) : null}
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
