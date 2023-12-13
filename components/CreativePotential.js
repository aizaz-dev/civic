import React from "react";
import Slider from "./CreativePotentialSlider";

const CreativePotential = () => {
  return (
    <div className="creative_potential relative">
      <Slider />
      <div className="absolute w-[448px] h-[448px] bottom-0 -right-80 bg-[#68c1b885] rounded-[224px] blur-[50px] z-100"></div>
    </div>
  );
};

export default CreativePotential;
