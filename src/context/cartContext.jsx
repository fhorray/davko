import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const removeFromCart = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updateCart);
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce(
    (sum, currentProduct) => sum + currentProduct.quantity,
    0
  );

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
