import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/cartContext";
import ProductModal from "./components/ProductModal/ProductModal";

function App() {
  return (
    <CartProvider>
      <ProductModal />
      <Header />
      <Banner />

      {/* NEW ARRIVALS */}
      <SectionTitle
        title="New Arrivals"
        hasDescription={true}
        description={"Explore our new-in products"}
      />
      <ProductList listName="NewArrivals" />

      <SectionTitle
        title="Our Luxury Items"
        hasDescription={false}
        description={null}
      />
      <ProductList listName="LuxuryItems" />

      {/* FOOTER */}
      <Footer />
    </CartProvider>
  );
}

export default App;
