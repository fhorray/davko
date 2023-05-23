import React, { useContext } from "react";
import { ProductModalContext } from "../../context/productModalContext";

// ICONS
import MainImage from "../../assets/images/product-images/product-01.png";
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

const ProductModal = (props) => {
  // PROPS
  const { title, image, id } = props;

  const { closeModal } = useContext(ProductModalContext);
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
            <img src={MainImage} alt="Main Image" />
          </div>
          {/* MORE IMAGES */}
          <ul className="more-images">
            <li>
              <img src={MainImage} alt="Main Image" />
            </li>
            <li>
              <img src={MainImage} alt="Main Image" />
            </li>
            <li>
              <img src={MainImage} alt="Main Image" />
            </li>
          </ul>
        </div>

        {/* PRODUCT INFORMATION AREA */}
        <div className="info-container">
          <h3>{props.title}</h3>
          <div className="id-stars">
            <span>ID: 123456</span>
            <div className="star">
              <img src={StarBright} alt="Start" />
              <img src={StarBright} alt="Start" />
              <img src={StarBright} alt="Start" />
              <img src={StarBright} alt="Start" />
              <img src={StarLight} alt="Start" />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="description">
            <h5>Description:</h5>
            <p>
              Elevate your style with the luxurious Striped Button-Up Shirt,
              crafted with meticulous attention to detail, refined design, and a
              harmonious color palette. Its premium fabric, slim-fit silhouette,
              and tailored elements exude sophistication and timeless charm,
              making it a must-have addition to any wardrobe.
            </p>
          </div>

          <ColorSizeForm />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
