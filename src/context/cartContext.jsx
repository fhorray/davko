import React from "react";
import { ProductModalContext } from "./productModalContext";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  // Context do produto selecionado ao clicar no AddButton do ProductList
  const { closeModal } = React.useContext(ProductModalContext);

  const [cartItems, setCartItems] = React.useState([]);

  // AREA DE FUNÇÕES DO PRODUCT MODAL

  let [color, setColor] = React.useState([]);
  let [size, setSize] = React.useState([]);

  // Quantidade de items no modal antes de clicar nas setas para incrementar e decrementar
  let [itemQuantity, setItemQuantity] = React.useState(1);
  // INCREMENTAR
  function incrementItems() {
    setItemQuantity(itemQuantity + 1);
  }
  // DECREMENTAR
  function decrementItems() {
    if (itemQuantity <= 1) {
      setItemQuantity(1);
    } else {
      setItemQuantity(itemQuantity - 1);
    }
  }

  // ===================================

  // FUNÇÃO QUE VAI ADICIONAR ITEM NO CART
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: (itemQuantity += itemQuantity),
                color: color,
                size: cartItem.size.concat(size),
              }
            : cartItem
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...item, quantity: itemQuantity, color: color, size: [size + " "] },
      ]);
    }
    closeModal();
    setItemQuantity(1);
  };

  const addOne = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
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
    addOne,
    removeOne,
    removeFromCart,
    clearCart,
    totalItems,
    setCartItems,
    color,
    size,
    setColor,
    setSize,
    itemQuantity,
    setItemQuantity,
    incrementItems,
    decrementItems,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
