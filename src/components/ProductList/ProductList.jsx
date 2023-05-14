import React from "react";
import Product from "../Product/Product";
import NewArrivals from "../../data/new-arrivals.json";
import LuxuryItems from "../../data/luxury-products.json";

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

  return (
    <section className="product-list">
      <div className="container">
        {jsonContent.map((product) => (
          <Product
            image={product.image}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            isNew={product.isNew}
            hasDiscount={product.hasDiscount}
            discountPercentage={product.discountPercentage}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
