import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  // FUNÇÃO QUE VAI ADICIONAR ITEM NO CART
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeOne = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeFromCart = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updateCart);
    console.log("excluido");
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce(
    (sum, currentProduct) => sum + currentProduct.quantity,
    0
  );

  // Valor a ser utilizado no context abaixo.
  const cartContextValue = {
    cartItems,
    addToCart,
    removeOne,
    removeFromCart,
    clearCart,
    totalItems,
    setCartItems,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
