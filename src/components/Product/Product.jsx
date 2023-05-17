import React from "react";
import AddButton from "../AddButton/AddButton";

const Product = (props) => {
  return (
    <div className="item">
      <div className="image-box">
        <img src={props.image} alt="Product Item" />
        {props.isNew ? <span className="new">New</span> : ""}
        {props.hasDiscount ? (
          <span className="discount-tag">-{props.discountPercentage}% OFF</span>
        ) : null}
      </div>
      <h3>{props.title}</h3>
      <div className="price-info">
        <span>${props.price}</span>
        <del>${props.oldPrice}</del>
      </div>
      <AddButton />
    </div>
  );
};

export default Product;
