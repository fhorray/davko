import React from "react";
import Product from "../Product/Product";
import NewArrivals from "../../data/new-arrivals.json";
import LuxuryItems from "../../data/luxury-products.json";
import AddButton from "../AddButton/AddButton";
import { CartContext } from "../../context/cartContext";
import CartIcon from "../../assets/images/cart-icon.svg";

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
    addToCart(product);
    console.log(product);
  };
  console.log(cartItems);

  return (
    <section className="product-list">
      <div className="container">
        {jsonContent.map((product) => (
          <div>
            <Product
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              isNew={product.isNew}
              hasDiscount={product.hasDiscount}
              discountPercentage={product.discountPercentage}
              key={product.id}
              quantity={product.quantity}
            />
            <button
              className="add-btn"
              type="button"
              onClick={() => handleAddToCart(product)}
            >
              <img src={CartIcon} alt="Cart Icon" />
              ADD
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
