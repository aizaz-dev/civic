import { useState } from "react";
// import "./App.css";
// import "./Landing.module.scss";
import { TfiStatsUp } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { SiBoost } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { RiInstagramFill } from "react-icons/ri";
import TopInfluencers from "./TopInfluencers";
import BeautyMekup from "./BeautyMekup";
import TopTrends from "./TopTrends";
import Footer from "../Footer";

function Landing() {
  return (
    <>
      <div className="px-8 lg:px-20 max-w-[1400px] mr-auto ml-auto">
        <TopInfluencers />
        <BeautyMekup />
        <TopTrends />
      </div>
      <Footer />
    </>
  );
}

export default Landing;
