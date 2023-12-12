import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

const carouselItems = [
  {
    id: 1,
    image: "https://file.rendit.io/n/Bw13x8xSflrq0H6smlAI.png",
    title: "Photography Sessions",
    description: "Explore our stunning collection of images for inspiration.",
  },
  {
    id: 2,
    image: "https://file.rendit.io/n/h6wNkC8SaAKbrc1CVhgW.png",
    title: "Social Media Consultation",
    description: "Explore our stunning collection of images for inspiration.",
  },
  {
    id: 3,
    image: "https://file.rendit.io/n/if7PUNsfqsVccH8NVEyx.png",
    title: "Content Collaboration",
    description: "Explore our stunning collection of images for inspiration.",
  },
  {
    id: 4,
    image: "https://file.rendit.io/n/aQOth4Js3mac5DhW03DR.png",
    title: "Event Hosting",
    description: "Explore our stunning collection of images for inspiration.",
  },
  {
    id: 5,
    image: "https://file.rendit.io/n/Bw13x8xSflrq0H6smlAI.png",
    title: "5",
    description: "Explore our stunning collection of images for inspiration.",
  },
  {
    id: 6,
    image: "https://file.rendit.io/n/h6wNkC8SaAKbrc1CVhgW.png",
    title: "6",
    description: "Explore our stunning collection of images for inspiration.",
  },
];
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
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div className="first_slider relative row">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        <h3 className="mb-20 mt-28">
          <div className="text-5xl md:text-4 font-['Gilroy-Bold-☞'] leading-[55.2px] capitalize text-[#232323] w-min">
            Featured Products
          </div>
          <div
            id="InfluencersRoot"
            className="font-['Quicksand'] leading-[24px] text-[16px]"
          >
            Explore our stunning collection of images for inspiration.
          </div>
        </h3>
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
                          <img
                            className="w-full h-[414px]"
                            id={"img" + product.id}
                            src={product.image}
                            alt={product.name}
                          />
                          <div className="flex row w-100 mt-4">
                            <div className="text-capitalize [font-family:'Quicksand',Helvetica] font-bold text-black text-[20px] ">
                              {product.title}
                            </div>
                            <div className="[font-family:'Quicksand',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px] itemPrice px-[12]">
                              {product.description}
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
