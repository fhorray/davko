import React, { useState } from "react";
import AddButton from "../../AddButton/AddButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ColorSizeForm() {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com os dados do formulário
    console.log("color selecionada:", color);
    console.log("size selecionado:", size);
  };

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
              onChange={(event) => setcolor(event.target.value)}
            />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="blue"
              checked={color === "blue"}
              onChange={(event) => setcolor(event.target.value)}
            />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="pink"
              checked={color === "pink"}
              onChange={(event) => setcolor(event.target.value)}
            />
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="black"
              checked={color === "black"}
              onChange={(event) => setcolor(event.target.value)}
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
            onClick={() => {
              if (quantity > 1) {
                removeOne({ id });
              } else {
                removeFromCart({ id });
              }
            }}
          />
          {"0"}
          <FontAwesomeIcon
            className="angle right"
            icon={faAngleRight}
            onClick={() => addToCart({ ...props, quantity: 1 })}
          />
        </span>
        <AddButton />
      </div>
    </form>
  );
}

export default ColorSizeForm;
