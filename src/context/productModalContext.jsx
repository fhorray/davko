import React, { createContext, useState } from "react";

// Cria o contexto do modal
export const ProductModalContext = createContext();

// PROVIDER
export const ProductModalProvider = ({ children }) => {
  // useState para setar o modal como aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // useState ára setar o produto selecionado ao clicar no AddButton do Product list e mostrar as informações no modal.
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
