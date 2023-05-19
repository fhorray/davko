import React from "react";
import CartIcon from "../../assets/images/cart-icon.svg";

const AddButton = (props) => {
  return (
    <button className="add-btn" type="button" onClick={() => onClick}>
      <img src={CartIcon} alt="Cart Icon" />
      ADD
    </button>
  );
};

export default AddButton;
