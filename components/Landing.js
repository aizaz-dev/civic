import React from "react";

import Slider from "./Slider";
import Hero from "./Hero";
import OurWork from "./OurWork";
import FeaturedListings from "./FeaturedListings";
import InfluencerMarketingPotential from "./InfluencerMarketingPotential";
import CreativePotential from "./CreativePotential";
import Streamline from "./Streamline";
import PowerOfViralocity from "./PowerOfViralocity";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <div className="bg-white px-8 lg:px-20 max-w-[1400px] mr-auto ml-auto">
        <Slider />
        <OurWork />
        <FeaturedListings />
      </div>
      <Streamline />
      <div className="bg-white px-8 lg:px-20 max-w-[1400px] mr-auto ml-auto">
        <InfluencerMarketingPotential />
        <CreativePotential />
      </div>
      <PowerOfViralocity />
      <Footer/>
    </div>
  );
};

export default Landing;
