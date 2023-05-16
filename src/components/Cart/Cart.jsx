import React from "react";
import product01 from "../../assets/images/product-images/product-01.png";

const Cart = () => {
  return (
    <ul className="cart-container">
      {/* PRODUCT 1 */}
      <li>
        <div className="image-container">
          <img src={product01} alt="Image Cart" />
        </div>
        <div className="product-info">
          <h5>Product name - Lorem Ipsum sit Amet dolor.</h5>
          <span>ID: 123456</span>
          <div className="size-color">
            <span>Color: Black</span>
            <span>Size: M</span>
          </div>
          <div className="quantity-value">
            <span className="quantity">3</span>
            <span className="value">$150.00</span>
          </div>
        </div>
      </li>
      {/* PRODUCT 2 */}
      <li>
        <div className="image-container">
          <img src={product01} alt="Image Cart" />
        </div>
        <div className="product-info">
          <h5>Product name - Lorem Ipsum sit Amet dolor.</h5>
          <span>ID: 123456</span>
          <div className="size-color">
            <span>Color: Black</span>
            <span>Size: M</span>
          </div>
          <div className="quantity-value">
            <span className="quantity">3</span>
            <span className="value">$150.00</span>
          </div>
        </div>
      </li>
      {/* PRODUCT 3 */}
      <li>
        <div className="image-container">
          <img src={product01} alt="Image Cart" />
        </div>
        <div className="product-info">
          <h5>Product name - Lorem Ipsum sit Amet dolor.</h5>
          <span>ID: 123456</span>
          <div className="size-color">
            <span>Color: Black</span>
            <span>Size: M</span>
          </div>
          <div className="quantity-value">
            <span className="quantity">3</span>
            <span className="value">$150.00</span>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Cart;
