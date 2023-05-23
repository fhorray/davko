import React, { createContext, useState } from "react";

// Cria o contexto do modal
export const ProductModalContext = createContext();

// Componente provedor do contexto
export const ProductModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Função para abrir o modal com um produto específico
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
    console.log("Aberto");
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedProduct(null);
    setIsOpen(false);
    console.log("fechado");
  };

  return (
    <ProductModalContext.Provider
      value={{
        isOpen,
        selectedProduct,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ProductModalContext.Provider>
  );
};
