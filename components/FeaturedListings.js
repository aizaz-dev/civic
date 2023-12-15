import React from "react";
import Slider from "./FeaturedListingSlider";
import Link from "next/link";

const FeaturedListings = () => {
  return (
    <div className="our_work relative">
      <Slider />
      <div className="flex items-center justify-center gap-[10px] px-[32px] py-[10px] relative bg-[#68c1b8] rounded-[24px] mx-auto my-auto w-fit">
        <Link
          href="/top-influencers"
          className="mylink relative w-fit mt-[-1.00px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap no-underline"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedListings;
