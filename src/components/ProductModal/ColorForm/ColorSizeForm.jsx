import React, { useState } from "react";
import AddButton from "../../AddButton/AddButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../../context/cartContext";
import { ProductModalContext } from "../../../context/productModalContext";

function ColorSizeForm() {
  // CART CONTEXT
  const {
    addToCart,
    color,
    setColor,
    size,
    setSize,
    itemQuantity,
    incrementItems,
    decrementItems,
  } = React.useContext(CartContext);

  // Context do produto selecionado ao clicar no AddButton do ProductList
  const { selectedProduct, closeModal } = React.useContext(ProductModalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // LOGICA DO FORM AO SER ENVIADO
  };
  

  console.log("color: ", color);
  console.log("size: ", size);
  console.log("quantity:", itemQuantity);

  return (
    <form className="size-color" onSubmit={handleSubmit}>
      <div className="select-areas">
        {/* SIZE */}
        <div className="size">
          Size:
          <label>
            <input
              type="radio"
              name="size"
              value="P"
              checked={size === "P"}
              onChange={(event) => setSize(event.target.value)}
            />
            <span>P</span>
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="M"
              checked={size === "M"}
              onChange={(event) => setSize(event.target.value)}
            />
            <span>M</span>
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="G"
              checked={size === "G"}
              onChange={(event) => setSize(event.target.value)}
            />
            <span>G</span>
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="GG"
              checked={size === "GG"}
              onChange={(event) => setSize(event.target.value)}
            />
            <span>GG</span>
          </label>
        </div>

        {/* COLOR */}
        <div className="color">
          Color:
          <label>
            <input
              type="radio"
              name="color"
              value="red"
              checked={color === "red"}
              onChange={(event) => setColor(event.target.value)}
              style={{ backgroundColor: "tomato" }}
            />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="blue"
              checked={color === "blue"}
              onChange={(event) => setColor(event.target.value)}
              style={{ backgroundColor: "lightblue" }}
            />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="pink"
              checked={color === "pink"}
              onChange={(event) => setColor(event.target.value)}
              style={{ backgroundColor: "lightpink" }}
            />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="black"
              checked={color === "black"}
              onChange={(event) => setColor(event.target.value)}
              style={{ backgroundColor: "darkgrey" }}
            />
          </label>
        </div>
      </div>

      {/* QUANTITY & ADD TO CART */}
      <div className="quantity-add">
        <span className="quantity">
          <FontAwesomeIcon
            className="angle left"
            icon={faAngleLeft}
            onClick={() => decrementItems()}
          />
          {itemQuantity}
          <FontAwesomeIcon
            className="angle right"
            icon={faAngleRight}
            onClick={() => incrementItems()}
          />
        </span>
        <AddButton onClick={() => addToCart(selectedProduct)} />
      </div>
    </form>
  );
}

export default ColorSizeForm;
