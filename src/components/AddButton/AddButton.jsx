import React from "react";
import CartIcon from "../../assets/images/cart-icon.svg";

const AddButton = ({ onClick }) => {
  return (
    <a className="add-btn" href="#" onClick={onClick}>
      <img src={CartIcon} alt="Cart Icon" />
      ADD
    </a>
  );
};

export default AddButton;
