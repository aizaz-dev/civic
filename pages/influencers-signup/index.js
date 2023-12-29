import React from "react";

import Stream from "../../components/Influencers-signup/Stream";
import Unleash from "../../components/Influencers-signup/Unleash";
import Footer from "../../components/Footer";
import PowerOfViralocity from "../../components/Influencers-signup/PowerOfViralocity";
import Header from "../../components/Header";
import Faqs from "../../components/Influencers-signup/Faqs";

const index = () => {
  return (
    <>
      <div className="influencers_signup_con w-full bg-[#68C1B8] pb-[90px]">
        <Header
          bg={"bg-[#68c1b8]"}
          textOff={"!text-[#fff]"}
          title={"!text-[#fff]"}
          signupBg={"!bg-[#fff]"}
          signupText={"!text=[#68c1b8]"}
        />
        <div className="max-w-[1400px] w-full m-auto flex gap-[30px] lg:px-20 px-[20px]">
          <div className="w-[55%] pt-[50px] max-lg:w-full">
            <div className="flex flex-col pt-1 gap-8 w-full font-['Gilroy'] items-start">
              <div className="flex flex-col w-full items-start">
                <div className="text-2xl font-['Quicksand'] font-semibold leading-[36px] text-[#feffff]">
                  Join
                </div>
                <div className="lg:text-[56px] text-[34px] font-[700] lg:text-left text-start lg:leading-[66px] text-white w-full font-['Gilroy']">
                  Connect with Leading Brands and Amplify Your Influence
                </div>
              </div>
              <div className="flex flex-col mb-0 gap-8 w-full font-['Quicksand'] items-start max-lg:text-center max-lg:items-center">
                <div className="text-lg lg:leading-[28px] text-[#feffff] ">
                  Find the perfect influencers to promote your brand and reach a
                  wider audience.
                </div>
                <div className="flex flex-row lg:gap-4  w-full lg:w-3/5 items-start justify-between ">
                  <div className="font-semibold lg:px-[75px] px-[40px] w-fit leading-[24px] text-[#68c1b8] bg-[#feffff] flex flex-row justify-center align-middle mt-px  py-[13px]  items-start rounded-[50px] whitespace-nowrap ">
                    Sign Up
                  </div>
                  <div className="font-semibold lg:px-[65px] px-[30px] w-fit leading-[24px] text-white border-solid border-[#f9fcfc] flex flex-row justify-center  py-[13px] items-start border rounded-[50px] whitespace-nowrap">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[45%]  pt-[0px] relative hidden lg:block">
            <img
              src="/15.jpg"
              alt=""
              className="w-[505px] h-[548px] rounded-[20px] object-cover absolute right-0 bottom-[-150px]"
            />
          </div>
        </div>
      </div>
      <Stream />
      <Unleash />
      <Faqs />
      <PowerOfViralocity />

      <Footer />
    </>
  );
};

export default index;
