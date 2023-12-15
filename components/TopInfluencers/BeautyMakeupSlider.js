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
    ratting: 4.5,
    total: 266,
    personName: "Anito",
    personCountry: "USA",
  },
  {
    id: 2,
    image: "https://file.rendit.io/n/h6wNkC8SaAKbrc1CVhgW.png",
    title: "Social Media Consultation",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",
    price: 44,
    ratting: 4.0,
    total: 233,
    personName: "Jena",
    personCountry: "USA",
  },
  {
    id: 3,
    image: "https://file.rendit.io/n/if7PUNsfqsVccH8NVEyx.png",
    title: "Content Collaboration",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",
    price: 55,
    ratting: 3.5,
    total: 200,
    personName: "Anito",
    personCountry: "USA",
  },
  {
    id: 4,
    image: "https://file.rendit.io/n/aQOth4Js3mac5DhW03DR.png",
    title: "Event Hosting",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",
    price: 22,
    ratting: 4.0,
    total: 166,
    personName: "Jena",
    personCountry: "USA",
  },
  {
    id: 5,
    image: "https://file.rendit.io/n/Bw13x8xSflrq0H6smlAI.png",
    title: "5",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",
    price: 55,
    ratting: 4.5,
    total: 188,
    personName: "Jena",
    personCountry: "USA",
  },
  {
    id: 6,
    image: "https://file.rendit.io/n/h6wNkC8SaAKbrc1CVhgW.png",
    title: "6",
    description: "Explore our stunning collection of images for inspiration.",
    social: "/insta.png",
    price: 40,
    ratting: 4.8,
    total: 122,
    personName: "Anito",
    personCountry: "USA",
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
    <div className="beauty_makeup relative row lg:mb-[40px] mb-[80px]">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 lg:mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        <div className="lg:mb-20 mb:16 lg:mt-16 mt-10">
          <div className="[font-family:'Gilroy-Bold-☞',Helvetica] font-normal text-[#232323] lg:text-[46px] text-[30px] tracking-[0] leading-[55.2px]">
            Beauty And Makeup
          </div>
          <p className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px]">
            Explore our wide range of high-quality influencers.
          </p>
        </div>
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
                        <div className="productListing w-full relative">
                          <img
                            className="w-full object-cover"
                            id={"img" + product.id}
                            src={product.image}
                            alt={product.name}
                          />
                          <div className="flex items-center p-2 absolute top-4 left-0 w-[189px] h-[72px] bg-[#fdfdfd74] backdrop-blur-20 blur-20 rounded-r-full">
                            <img
                              src="/Image-52.png"
                              className="!w-[45px] h-[45px] object-cover"
                              alt=""
                            />
                            <div className=" justify-self-start self-start ml-2">
                              <div className=" [font-family:'Quicksand',Helvetica] font-bold text-black text-[18px] whitespace-nowrap">
                                {product.personName}
                              </div>
                              <div>{product.personCountry}</div>
                            </div>
                            <img
                              className="!w-[30px] h-[30px] ml-auto"
                              src="/insta.png"
                              alt=""
                            />
                          </div>
                          <div className="flex row mt-4 ">
                           

                            <div className="[font-family:'Quicksand',Helvetica] font-bold text-black text-[24px] tracking-[0] leading-[36px]">
                              {product.title}
                            </div>
                            <div className="[font-family:'Quicksand',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[24px]">
                              {product.description}
                            </div>
                            <div className="flex items-center gap-1 [font-family:'Quicksand',Helvetica] font-bold text-[#000] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-[20px] h-[20px]"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {product.ratting}
                              <span className="text-[14px] text-[#6c6b6b]">
                                ({product.total})
                              </span>
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
