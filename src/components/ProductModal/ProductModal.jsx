import React, { useContext } from "react";
import { ProductModalContext } from "../../context/productModalContext";

// ICONS
import StarBright from "../../assets/images/star-bright-i.svg";
import StarLight from "../../assets/images/star-light-i.svg";

// FONTAWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTimes,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ColorSizeForm from "./ColorForm/ColorSizeForm";
import { CartContext } from "../../context/cartContext";

const ProductModal = (props) => {
  // CART CONTEXT
  const { addToCart } = useContext(CartContext);

  // Context do produto selecionado ao clicar no AddButton do ProductList
  const { selectedProduct, closeModal } = useContext(ProductModalContext);

  // FUNÇÃO DO RATING DO PRODUTO
  const renderComponent = (number) => {
    const maxTimes = Math.min(number, 5);
    const components = [];

    for (let i = 0; i < maxTimes; i++) {
      components.push(
        <img src={StarBright} alt="Start" key={selectedProduct.id} />
      );
    }

    return components;
  };

  return (
    <div className="product-modal-overlay">
      <div className="product-info-container">
        <FontAwesomeIcon
          className="close-icon"
          icon={faTimes}
          onClick={closeModal}
        />

        {/* IMAGES AREA */}
        <div className="images">
          <div className="main-img-box">
            <img src={selectedProduct.image} alt="Main Image" />
          </div>
          {/* SECONDARY IMAGES */}
          <ul className="more-images">
            {selectedProduct.secondaryImages.map((image) => (
              <li key={selectedProduct.title}>
                <img src={image} alt="Main Image" />
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCT INFORMATION AREA */}
        <div className="info-container">
          <h3>{selectedProduct.title}</h3>
          <div className="id-stars">
            <span>ID: {selectedProduct.id}</span>
            <div className="star">
              <span>({selectedProduct.rating})</span>
              {renderComponent(selectedProduct.rating)}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="description">
            <h5>Description:</h5>
            <p>{selectedProduct.description}</p>
          </div>

          <ColorSizeForm />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
