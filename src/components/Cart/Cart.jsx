import React from "react";
import Product from "../Product/Product";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } =
    React.useContext(CartContext);
  console.log(cartItems);

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (sum, currentProduct) => sum + currentProduct.quantity,
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
        {cartItems.map(({ image, title, id, color, size, price, quantity }) => (
          <Product
            id={id}
            key={id}
            inCart={true}
            image={image}
            title={title}
            price={price}
            quantity={quantity}
            size={size[0]}
            color={color}
            oldPrice={false}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
