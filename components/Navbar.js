import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Image from "next/image";
import { carouselItems } from "./data";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      600: {
        items: 5,
      },
      700: {
        items: 6,
      },
      1000: {
        items: 7,
      },
    },
  };

  return (
    <div className="navbar relative row">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 bg-white mt-4"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            navText={[
              '<img src="/images/Arrow_left.png" />',
              '<img src="/images/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {carouselItems && carouselItems.length > 0
              ? carouselItems.map((product) => {
                  return (
                    <>
                      <div
                        id="featuredProducts"
                        className="item float-left w-full"
                        key={product.name}
                      >
                        <div className="productListing w-full">
                          <div className="flex row ">
                            <div className="text-sm font-['Quicksand'] font-bold leading-[21px] w-min ">
                              {product.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
export default Slider;
