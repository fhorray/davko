import React from "react";
import Product from "../Product/Product";
import Products from "../../data/products.json";

const ProductList = (props) => {
  return (
    <section className="product-list">
      <div className="container">
        {Products.map((product) => (
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
