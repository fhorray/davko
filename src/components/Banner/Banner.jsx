import React from "react";
// import BannerOne from "../../assets/images/banner/banner1.png";
// import BannerTwo from "../../assets/images/banner/banner2.png";
// import BannerThree from "../../assets/images/banner/banner3.png";
// import BannerFour from "../../assets/images/banner/banner4.png";
import Benefit from "../Benefit/Benefit";
import Banners from "../../data/banners.json";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper";
import { EffectFade } from "swiper";

const Banner = () => {
  return (
    <section className="s-banner">
      <div className="container">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => null}
          loop={true}
          // autoplay={{
          //   delay: 4000, // Slide timer
          //   disableOnInteraction: false, // Allow the autoplay continues when user press the slide
          // }}
          effect="fade"
        >
          {/* SLIDES */}
          {Banners.map((banner) => {
            return (
              <SwiperSlide key={banner.id}>
                <div className="banner">
                  <img src={banner.image} alt={"Banner " + banner.id} />
                  <div className="banner-info">
                    <h1 dangerouslySetInnerHTML={{ __html: banner.text }}></h1>
                    {banner.hasDiscountMessage ? (
                      <div className="discount-message">
                        <p>
                          Discount
                          <span className="percentage">
                            up to {banner.discountPercentage}%
                          </span>{" "}
                          on all items.
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Benefit />
      </div>
    </section>
  );
};

export default Banner;
