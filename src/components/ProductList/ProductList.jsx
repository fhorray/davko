import React, { useContext } from "react";
import Product from "../Product/Product";
import NewArrivals from "../../data/new-arrivals.json";
import LuxuryItems from "../../data/luxury-products.json";
import AddButton from "../AddButton/AddButton";
import { CartContext } from "../../context/cartContext";
import ProductModal from "../ProductModal/ProductModal";
import { ProductModalContext } from "../../context/productModalContext";

const ProductList = (props) => {
  const listName = props.listName;
  let jsonContent;

  if (listName === "NewArrivals") {
    jsonContent = NewArrivals;
  } else if (listName === "LuxuryItems") {
    jsonContent = LuxuryItems;
  } else {
    jsonContent = [];
  }

  // CART CONTEXT
  const { addToCart, cartItems } = React.useContext(CartContext);

  // PRODUCT MODAL
  const { openModal, isOpen } = useContext(ProductModalContext);

  // AQUI VAI SER RETORNADO A LISTA DE PRODUTOS
  return (
    <section className="product-list">
      {isOpen ? <ProductModal /> : null}
      <div className="container">
        {jsonContent.map((product) => {
          return (
            <div key={product.id}>
              <Product
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                isNew={product.isNew}
                hasDiscount={product.hasDiscount}
                discountPercentage={product.discountPercentage}
                quantity={
                  cartItems.find((item) => item.id === product.id)?.quantity ||
                  null
                }
                onClick={() => handleRemoveFromCart(product)}
              />
              <AddButton onClick={() => openModal(product)} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
