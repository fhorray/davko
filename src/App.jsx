import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />

      {/* NEW ARRIVALS */}
      <SectionTitle title="New Arrivals" />
      <ProductList />

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
