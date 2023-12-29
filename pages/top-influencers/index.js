import React from "react";
import Header from "../../components/Header";
import Slider from "../../components/Navbar";
import Landing from "../../components/TopInfluencers/Landing";

const index = () => {
  return (
    <div className="top_page">
      <Header
        bg={"bg-[#fff]"}
        title={"!text-[#68c1b8]"}
        textOff={"!text-[#000]"}
        signupBg={"!bg-[#68c1b8]"}
        signupText={"!text-[#fff]"}
      />
      <div className="bg-[#68c1b8]">
        <div className="bg-white px-8 lg:px-20 max-w-[1400px] mr-auto ml-auto">
          <Slider />
        </div>
      </div>
      <Landing />
    </div>
  );
};

export default index;
