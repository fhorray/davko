import React from "react";
import CartIcon from "../../assets/images/cart-icon.svg";

const Product = (props) => {
  return (
    <div className="item">
      <div className="image-box">
        <img src={props.image} alt="Product Item" />
        {props.isNew ? <span className="new">New</span> : ""}
        {props.hasDiscount ? (
          <span className="discount-tag">-{props.discountPercentage}% OFF</span>
        ) : (
          ""
        )}
      </div>
      <h3>{props.title}</h3>
      <div className="price-info">
        <span>${props.price}</span>
        <del>${props.oldPrice}</del>
      </div>
      <a className="add-btn" href="#">
        <img src={CartIcon} alt="Cart Icon" />
        ADD
      </a>
    </div>
  );
};

export default Product;
