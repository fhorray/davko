import React from "react";

import MainImage from "../../assets/images/product-images/product-01.png";
import StarBright from "../../assets/images/star-bright-i.svg";
import StarLight from "../../assets/images/star-light-i.svg";
import AddButton from "../AddButton/AddButton";

// FONTAWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ProductModal = () => {
  <ProductModal />;
  return (
    <div className="product-modal-overlay">
      <div className="product-info-container">
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
          <h3>Product name - Lorem Ipsum sit Amet dolor.</h3>
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
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
