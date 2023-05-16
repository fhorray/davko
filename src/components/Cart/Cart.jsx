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
      quantity: 3,
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

  return (
    <ul className="cart-container">
      {cartItem.map((product) => (
        <li>
          <div className="image-container">
            <img src={product.image} alt="Image Cart" />
          </div>
          <div className="product-info">
            <h5>{product.title}</h5>
            <span>ID: {product.id}</span>
            <div className="size-color">
              <span>Color: {product.color}</span>
              <span>Size: {product.size[1]}</span>
            </div>
            <div className="quantity-value">
              <span className="quantity">{product.quantity}</span>
              <span className="value">
                ${Math.floor(product.price * product.quantity)}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
