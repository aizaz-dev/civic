import React from "react";

import Slider from "./Slider";
import Hero from "./Hero";
import OurWork from "./OurWork";
import FeaturedListings from "./FeaturedListings";
import InfluencerMarketingPotential from "./InfluencerMarketingPotential";
import CreativePotential from "./CreativePotential";

const Landing = () => {
  return (
    <div className="bg-white px-8 lg:px-20 max-w-[1400px] mr-auto ml-auto">
      <Slider />
      <OurWork />
      <FeaturedListings />
      <InfluencerMarketingPotential />
      <CreativePotential />
    </div>
  );
};

export default Landing;
