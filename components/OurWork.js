import React from "react";
import Slider from "./OurWorkSlider";

const OurWork = () => {
  return (
    <div className="our_work relative">
      <Slider />
      <div className="absolute w-[448px] h-[448px] top-0 -left-80 bg-[#68c1b885] rounded-[224px] blur-[50px] z-100"></div>
    </div>
  );
};

export default OurWork;
