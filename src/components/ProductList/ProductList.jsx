import React from "react";
import Product from "../Product/Product";
import NewArrivals from "../../data/new-arrivals.json";
import LuxuryItems from "../../data/luxury-products.json";
import AddButton from "../AddButton/AddButton";
import { CartContext } from "../../context/cartContext";
import CartIcon from "../../assets/images/cart-icon.svg";
import ProductModal from "../ProductModal/ProductModal";

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

  const { addToCart, cartItems } = React.useContext(CartContext);

  const handleAddToCart = (product) => {
    const hasItem = cartItems.find((item) => item.id === product.id);
    if (hasItem) {
      console.log("tem");
      addToCart({ ...product, quantity: hasItem.quantity + 1 });
    } else {
      addToCart({ ...product, quantity: 1 });
      console.log(product);
    }
  };

  return (
    <section className="product-list">
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
              <AddButton onClick={() => handleAddToCart(product)} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
