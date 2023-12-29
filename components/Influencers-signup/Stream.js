import Image from "next/image";
import { TfiStatsUp } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { SiBoost } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { RiInstagramFill } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { PiHandCoins } from "react-icons/pi";

import React from "react";

const Stream = () => {
  return (
    <main>
      {/* Main Container  */}
      <div className="relative w-[100%] max-w-[1400px] mx-auto lg:mt-[160px] mt-[40px] lg:px-20 px-[20px] flex justify-center">
        {/* Flex Box Main  */}
        <div className="flex gap-10">
          {/* Image Box */}
          <div className=" max-md:hidden w-[50%] h-[100%] flex  justify-start">
            <img
              className="w-[615px] object-cover rounded-[20px]"
              src="/pink-girl.jpg"
              alt=""
            />
          </div>
          {/* Main Box Center Items */}
          <div className="max-md:w-[100%] w-[50%] h-[100%]">
            {/* Cennect P$H Parent */}
            <div className="">
              <p className=" text-[#68C1B8] font-bold text-[16px] max-md:text-center">
                Connect
              </p>
            </div>
            <h1 className="text-[46px] font-[700] [font-family:'Gilroy'] md-max:text-[30px] max-md:text-[25px] max-md:text-center">
              Maximize Your Influence with Viralocity
            </h1>
            <p className="text-[18px] max-md:text-center text-[#666] font-[Quicksand]">
              Get access to premier brand deals and global opportunities,
              connecting you with top brands in your niche. Maximize your
              earning potential and grow your influence.
            </p>
            {/* Learn More & Sign Up Buttons Box */}

            {/* main */}
            <div className="mt-4 pt-[8px] flex max-md:w-full max-md:gap-3 ">
              {/* icon */}
              <div className="w-[75px]   flex flex-col justify-between max-md:items-end pb-[30px]">
                <div className="w-[60px] h-[60px] bg-[#e1f3f1] rounded-[50%] flex items-center justify-center">
                  <div className="w-[45px] h-[45px] bg-[#68c1b8] flex items-center  justify-center rounded-[50%]">
                    <MdWorkspacePremium color="white" fontSize={20} />
                  </div>
                </div>

                {/* vector */}
                <div className="w-[65px] flex items-center justify-center">
                  <img src="/Vector.svg" alt="" />
                </div>

                <div className="w-[60px] h-[60px] bg-[#e1f3f1] rounded-[50%] flex items-center justify-center">
                  <div className="w-[45px] h-[45px] bg-[#68c1b8] flex items-center  justify-center rounded-[50%]">
                    <TbSpeakerphone color="white" fontSize={20} />
                  </div>
                </div>

                {/* vector */}
                <div className="w-[65px] flex items-center justify-center">
                  <img src="/Vector.svg" alt="" />
                </div>
                {/* icon */}
                <div className="w-[60px] h-[60px] bg-[#e1f3f1] rounded-[50%] flex items-center justify-center">
                  <div className="w-[45px] h-[45px] bg-[#68c1b8] flex items-center  justify-center rounded-[50%]">
                    <GiProgression color="white" fontSize={20} />
                  </div>
                </div>

                {/* vector */}
                <div className="w-[65px] flex items-center justify-center">
                  <img src="/Vector.svg" alt="" />
                </div>
                {/* icon */}
                <div className="w-[60px] h-[60px] bg-[#e1f3f1] rounded-[50%] flex items-center justify-center">
                  <div className="w-[45px] h-[45px] bg-[#68c1b8] flex items-center  justify-center rounded-[50%]">
                    <PiHandCoins color="white" fontSize={20} />
                  </div>
                </div>
              </div>

              {/* stats */}
              <div className="flex flex-col w-full gap-6">
                <div className="w-full">
                  <h1 className="font-bold lg:text-[24px] text-[18px] [font-family:'Gilroy'] text-[#232323]">
                    Unlock Exclusive Brand Deals
                  </h1>
                  <p className="[font-family:'Quicksand'] p-0 m-0 lg:text-[18px] text-[15px]  text-[#666]">
                    Access premier brand deals and global opportunities that are
                    exclusive to Viralocity influencers.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold lg:text-[24px] text-[18px] [font-family:'Gilroy'] text-[#232323]">
                    AI-Driven Campaign Matchmaking
                  </h1>
                  <p className="[font-family:'Quicksand'] p-0 m-0 lg:text-[18px] text-[15px]  text-[#666]">
                    Let our AI-driven matchmaking system connect you with
                    personalized campaign opportunities.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold lg:text-[24px] text-[18px] [font-family:'Gilroy'] text-[#232323]">
                    Track Performance and Insights
                  </h1>
                  <p className="[font-family:'Quicksand'] p-0 m-0 lg:text-[18px] text-[15px]  text-[#666]">
                    Track your performance and gain valuable insights with our
                    advanced analytics dashboard.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold lg:text-[24px] text-[18px] [font-family:'Gilroy'] text-[#232323]">
                    Unlock Exclusive Opportunities
                  </h1>
                  <p className="[font-family:'Quicksand'] p-0 m-0 lg:text-[18px] text-[15px]  text-[#666]">
                    Discover exclusive brand deals and global opportunities that
                    can take your influence to the next level.
                  </p>
                </div>
              </div>
              {/* //Stats */}
            </div>
            <div className="mt-4 flex justify-left gap-10 max-md:gap-5">
              <button className="bg-[#68c1b8] px-[32px] py-[10px] rounded-[25px] text-[white] whitespace-nowrap">
                Learn More
              </button>
              <button className="px-[32px] py-[10px] rounded-[25px] text-[black] whitespace-nowrap ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-[448px] h-[448px] bottom-[-200px] left-[-300px] bg-[#68c1b83c] rounded-[224px] blur-[50px] z-1"></div>
        <div className="absolute w-[448px] h-[448px] top-[-300px] left-[-200px] bg-[#68c1b83c] rounded-[224px] blur-[50px] z-1"></div>
      </div>
    </main>
  );
};

export default Stream;
