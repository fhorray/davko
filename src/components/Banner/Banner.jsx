import React from "react";
import BannerOne from "../../assets/images/banner/banner1.png";
import Benefit from "../Benefit/Benefit";

const Banner = () => {
  return (
    <section className="s-banner">
      <div className="container">
        <div className="banner">
          <img src={BannerOne} alt="Banner One" />
          <h1>
            Discover your best, <br />
            be the best.
          </h1>
          <div className="discount-message">
            <p>
              Discount
              <span className="percentage">up to 50%</span>
              on all items.
            </p>
          </div>
        </div>
        <Benefit />
      </div>
    </section>
  );
};

export default Banner;
