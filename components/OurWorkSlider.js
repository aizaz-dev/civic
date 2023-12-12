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
    social: "/insta.png",
    price: 33,
  },
  {
    id: 2,
    image: "https://file.rendit.io/n/h6wNkC8SaAKbrc1CVhgW.png",
    title: "Social Media Consultation",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",

    price: 44,
  },
  {
    id: 3,
    image: "https://file.rendit.io/n/if7PUNsfqsVccH8NVEyx.png",
    title: "Content Collaboration",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",
    price: 55,
  },
  {
    id: 4,
    image: "https://file.rendit.io/n/aQOth4Js3mac5DhW03DR.png",
    title: "Event Hosting",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",
    price: 22,
  },
  {
    id: 5,
    image: "https://file.rendit.io/n/Bw13x8xSflrq0H6smlAI.png",
    title: "5",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",
    price: 55,
  },
  {
    id: 6,
    image: "https://file.rendit.io/n/h6wNkC8SaAKbrc1CVhgW.png",
    title: "6",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",
    price: 40,
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
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="our_work relative row">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        <h3 className="mb-20 mt-28">
          <div className="our_work_title text-center [font-family:'Quicksand',Helvetica] font-bold text-[#68c1b8] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
            Our Work
          </div>
          <div className="[font-family:'Gilroy-Bold-☞',Helvetica] font-normal text-[#232323] text-[46px] text-center tracking-[0] leading-[55.2px]">
            Top Influencers By Platform
          </div>
          <p className="[font-family:'Quicksand',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
            Explore our diverse influencers in various social platforms
          </p>
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
                            className="w-full object-cover"
                            id={"img" + product.id}
                            src={product.image}
                            alt={product.name}
                          />
                          <div className="flex row mt-4">
                            <img
                              src={product.social}
                              alt={product.name}
                              className="social_icon w-[34px] h-[34px] object-cover ml-4"
                            />
                            <div className="[font-family:'Quicksand',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px]">
                              {product.title}
                            </div>
                            <div className="[font-family:'Quicksand',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px]">
                              {product.description}
                            </div>
                            <div className="[font-family:'Quicksand',Helvetica] font-bold text-[#68c1b8] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                              ${product.price}
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
