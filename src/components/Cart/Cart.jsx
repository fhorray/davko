import React from "react";
import Product from "../Product/Product";
import { CartContext } from "../../context/cartContext";

const Cart = ({ onMouseLeave }) => {
  const { cartItems, removeFromCart } = React.useContext(CartContext);
  console.log(cartItems);

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (sum, currentProduct) => sum + currentProduct.quantity,
    0
  );

  return (
    <div className="cart" onMouseLeave={onMouseLeave}>
      <div className="buttons">
        <button className="btn white">View Bag ({totalItems})</button>
        <button className="btn black">Checkout</button>
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
            size={size}
            color={color}
            oldPrice={false}
            onClick={() => removeFromCart({ product })}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
