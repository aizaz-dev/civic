import React from "react";
import { TfiStatsUp } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { SiBoost } from "react-icons/si";
const Streamline = () => {
  return (
    <div className="w-[100%] m-auto lg:py-[60px] py-[18px] bg-[#f3f3f3] flex items-center justify-between mt-2">
      {/* Flex Box Main  */}
      <div className="w-[1420px] lg:p-4 lg:m-auto gap-5 flex items-center justify-center lg:bg-white bg-[#f3f3f3] rounded-[5px]">
        {/* Image Box */}
        <div className=" lg:flex hidden w-[50%] h-[100%] items-center justify-start">
          <img
            className="lg:w-[615px] lg:h-[692px] object-cover rounded-[20px]"
            src="./sideimg.jpg"
            alt=""
          />
        </div>
        {/* Main Box Center Items */}
        <div className="max-md:w-[90%] w-[50%] h-[100%] ">
          {/* Cennect P$H Parent */}
          <div className="mt-4">
            <p className="font-['Quicksand'] font-bold leading-[24px] text-[#68c1b8] ">
              Connect
            </p>
          </div>
          <h1 className="[font-family:'Gilroy-Bold-☞',Helvetica] font-normal text-[#232323] lg:text-[46px] text-[30px] tracking-[0] lg:leading-[55.2px] ">
            Streamline Your Influencer Marketing Campaigns
          </h1>
          {/* Learn More & Sign Up Buttons Box */}
          <div className="mt-4 flex justify-left gap-10 max-md:gap-5">
            <button className="bg-[#68c1b8] font-['Quicksand'] px-[32px] py-[10px] rounded-[25px] text-[white] whitespace-nowrap">
              Learn More
            </button>
            <button className="px-[32px] font-['Quicksand'] py-[10px] rounded-[25px] text-[black] whitespace-nowrap">
              Sign Up
            </button>
          </div>
          {/* main */}
          <div className="mt-4 lg:w-[80%] pt-[8px] flex">
            {/* icon */}
            <div className="w-[75px]  flex flex-col justify-center gap-2 max-md:gap-6">
              <div className="w-[60px] h-[60px] bg-[#e1f3f1] rounded-[50%] flex items-center justify-center">
                <div className="w-[45px] h-[45px] bg-[#68c1b8] flex items-center  justify-center rounded-[50%]">
                  <TfiStatsUp color="white" fontSize={20} />
                </div>
              </div>

              {/* vector */}
              <div className="w-[65px] flex items-center justify-center">
                <img src="./Vector.svg" alt="" />
              </div>

              <div className="w-[60px] h-[60px] bg-[#e1f3f1] rounded-[50%] flex items-center justify-center">
                <div className="w-[45px] h-[45px] bg-[#68c1b8] flex items-center  justify-center rounded-[50%]">
                  <CiLocationOn color="white" fontSize={20} />
                </div>
              </div>

              {/* vector */}
              <div className="w-[65px] flex items-center justify-center">
                <img src="./Vector.svg" alt="" />
              </div>

              {/* icon */}
              <div className="w-[60px] h-[60px] bg-[#e1f3f1] rounded-[50%] flex items-center justify-center">
                <div className="w-[45px] h-[45px] bg-[#68c1b8] flex items-center  justify-center rounded-[50%]">
                  <SlCalender color="white" fontSize={20} />
                </div>
              </div>

              {/* vector */}
              <div className="w-[65px] flex items-center justify-center">
                <img src="./Vector.svg" alt="" />
              </div>
              {/* icon */}
              <div className="w-[60px] h-[60px] bg-[#e1f3f1] rounded-[50%] flex items-center justify-center">
                <div className="w-[45px] h-[45px] bg-[#68c1b8] flex items-center  justify-center rounded-[50%]">
                  <SiBoost color="white" fontSize={20} />
                </div>
              </div>
            </div>

            {/* stats */}
            <div className="lg:w-[70%]  flex flex-col lg:gap-6 gap-1">
              <div>
                <h1 className="font-bold text-[16px] font-['Quicksand']">
                  Increase Reach
                </h1>
                <p className="font-['Quicksand'] text-[16px]">
                  Connect with influencers to promote your brand and reach a
                  wider audience.
                </p>
              </div>

              <div>
                <h1 className="font-bold text-[16px] font-['Quicksand']">
                  Track Results
                </h1>
                <p className="font-['Quicksand'] text-[16px]">
                  Get detailed insights and analytics for each influencer
                  marketing campaign.
                </p>
              </div>

              <div>
                <h1 className="font-bold text-[16px] font-['Quicksand']">
                  Schedule Campaigns
                </h1>
                <p className="font-['Quicksand'] text-[16px]">
                  Get detailed insights and analytics for each influencer
                  marketing campaign.
                </p>
              </div>

              <div>
                <h1 className="font-bold text-[16px] font-['Quicksand']">
                  Boost Engagement
                </h1>
                <p className="font-['Quicksand'] text-[16px]">
                  Drive higher engagement and brand awareness with targeted
                  influencer collaborations.
                </p>
              </div>
            </div>
            {/* //Stats */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streamline;
