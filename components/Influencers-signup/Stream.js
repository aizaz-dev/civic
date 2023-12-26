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
      <div className="w-[100%] max-w-[2000px] m-auto lg:py-[60px] py-[20px] flex items-center justify-center">
        {/* Flex Box Main  */}
        <div className="w-[1420px] flex items-center justify-center">
          {/* Image Box */}
          <div className=" max-md:hidden w-[50%] h-[100%] flex items-center justify-start">
            <img
              className="w-[615px] h-[692px] object-cover rounded-[20px]"
              src="/inf2.png"
              alt=""
            />
          </div>
          {/* Main Box Center Items */}
          <div className="max-md:w-[90%] w-[50%] h-[100%] p-[30px] ">
            {/* Cennect P$H Parent */}
            <div className="mt-4">
              <p className=" text-[#68C1B8] font-bold text-[16px] max-md:text-center">
                Connect
              </p>
            </div>
            <h1 className="text-[46px] font-normal font-[700] [font-family:'Helvetica'] md-max: text-[30px] max-md:text-[25px] max-md:text-center">
              Maximize Your Influence with Viralocity
            </h1>
            <p className="max-md:text-[12px] max-md:text-center">
              Get access to premier brand deals and global opportunities,{" "}
              <br className="hidden md:block" /> connecting you with top brands
              in your niche. Maximize your earning{" "}
              <br className="hidden md:block" /> potential and grow your
              influence.
            </p>
            {/* Learn More & Sign Up Buttons Box */}

            {/* main */}
            <div className="mt-4 w-[80%] pt-[8px] flex max-md:w-full max-md:gap-3 ">
              {/* icon */}
              <div className="w-[75px]   flex flex-col justify-center gap-4 max-md:gap-6 max-md:items-end">
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
              <div className="w-[70%]  flex flex-col gap-6">
                <div>
                  <h1 className="font-bold text-[16px] [font-family:'Helvetica'] ">
                    Unlock Exclusive Brand Deals
                  </h1>
                  <p className="[font-family:'Helvetica'] text-[16px] max-md:text-[13px]">
                    Access premier brand deals and global opportunities that are
                    exclusive to Viralocity influencers.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold text-[16px] [font-family:'Helvetica']">
                    AI-Driven Campaign Matchmaking
                  </h1>
                  <p className="[font-family:'Helvetica'] text-[16px] max-md:text-[13px]">
                    Let our AI-driven matchmaking system connect you with
                    personalized campaign opportunities.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold text-[16px] [font-family:'Helvetica']">
                    Track Performance and Insights
                  </h1>
                  <p className="[font-family:'Helvetica'] text-[16px] max-md:text-[13px]">
                    Track your performance and gain valuable insights with our
                    advanced analytics dashboard.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold text-[16px] [font-family:'Helvetica']">
                    Unlock Exclusive Opportunities
                  </h1>
                  <p className="[font-family:'Helvetica'] text-[16px] max-md:text-[13px]">
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
      </div>
    </main>
  );
};

export default Stream;
