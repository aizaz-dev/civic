import React from "react";

import Slider from "./Slider";
import Hero from "./Hero";
import OurWork from "./OurWork";
import FeaturedListings from "./FeaturedListings";

const Landing = () => {
  return (
    <div className="bg-white px-8 lg:px-20 max-w-[1400px] mr-auto ml-auto">
      <Slider />
      <OurWork />
      <FeaturedListings />
    </div>
  );
};

export default Landing;
