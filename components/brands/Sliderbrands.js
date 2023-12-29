import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Image from "next/image";
import { slideimage } from "./slideimage";

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

const Sliderbrands = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    // navClass: ["owl-prev", "owl-next"],
    // navText: [
    //   '<i class="fas fa-angle-left"></i>',
    //   '<i class="fas fa-angle-right"></i>',
    // ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };


  return (
    <div className="navbar flex relative items-center h-[183px] max-md:h-[160px] bg-[#EBF7F6]">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 flex items-center "
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag flex items-center justify-center gap-10 mb-0   h-full bg-[#EBF7F6]">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            // navText={[
            //   '<img src="/images/Arrow_left.png" />',
            //   '<img src="/images/Arrow_right.png" />',
            // ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {slideimage && slideimage.length > 0
              ? slideimage.map((product) => {
                  return (
                    <>
                      <div
                        id="featuredProducts"
                        className="item float-left w-[282px] h-[71px] max-md:w-[200px] max-md:h-[60px] max-md:p-4"
                        key={product.image}
                      >
                        <div className="productListing bg-[#EBF7F6] w-full ">
                          <div className="flex row items-center  h-full ">
                            <img className="text-sm font-['Quicksand'] font-bold  w-min "
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={300}
                            />
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
export default Sliderbrands;
