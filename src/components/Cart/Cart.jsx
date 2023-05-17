import React from "react";
import product01 from "../../assets/images/product-images/product-01.png";

const Cart = () => {
  const [cartItem, setCartItem] = React.useState([
    {
      id: 89,
      image: "/src/assets/images/product-images/product-08.png",
      title: "Blue Striped Shirt",
      price: 39.9,
      hasDiscount: true,
      discountPercentage: 33,
      color: "Black",
      size: ["P", "M", "G", "GG"],
      quantity: 10,
    },
    {
      id: 9,
      image: "/src/assets/images/product-images/product-09.png",
      title: "Blue Striped Shirt",
      price: 39.9,
      hasDiscount: true,
      discountPercentage: 33,
      color: "Black",
      size: ["P", "M", "G", "GG"],
      quantity: 3,
    },
    {
      id: 10,
      image: "/src/assets/images/product-images/product-10.png",
      title: "Black Dress",
      price: 19.99,
      oldPrice: 29.99,
      isNew: false,
      hasDiscount: true,
      discountPercentage: 33,
      color: "Pink",
      size: ["P", "M", "G", "GG"],
      quantity: 5,
    },
    {
      id: 11,
      image: "/src/assets/images/product-images/product-11.png",
      title: "Leather Jacket",
      price: 12.5,
      oldPrice: 24.9,
      isNew: true,
      hasDiscount: true,
      discountPercentage: 50,
      color: "Red",
      size: ["P", "M", "G", "GG"],
      quantity: 8,
    },
  ]);

  const totalItems = cartItem.reduce(
    (accumulator, currentProduct) => accumulator + currentProduct.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="buttons">
        <a className="btn white" href="#">
          View Bag ({totalItems})
        </a>
        <a className="btn black" href="#">
          Checkout
        </a>
      </div>
      <ul className="cart-list">
        {cartItem.map(({ image, title, id, color, size, price, quantity }) => (
          <li>
            <div className="image-container">
              <img src={image} alt="Image Cart" />
            </div>
            <div className="product-info">
              <h5>{title}</h5>
              <span>ID: {id}</span>
              <div className="size-color">
                <span>Color: {color}</span>
                <span>Size: {size[1]}</span>
              </div>
              <div className="quantity-value">
                <span className="quantity">{quantity}</span>
                <span className="value">${Math.floor(price * quantity)}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
