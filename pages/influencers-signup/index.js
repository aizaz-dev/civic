import React from "react";

import Stream from "../../components/Influencers-signup/Stream";
import Unleash from "../../components/Influencers-signup/Unleash";
import Footer from "../../components/Footer";
import PowerOfViralocity from "../../components/Influencers-signup/PowerOfViralocity";
import Header from "../../components/Header";
import Faqs from "../../components/Influencers-signup/Faqs";

const index = () => {
  return (
    <main>
      <div className="w-full bg-[#68C1B8] pb-[90px]">
        <Header
          bg={"bg-[#68c1b8]"}
          textOff={"!text-[#fff]"}
          title={"!text-[#fff]"}
          signupBg={"!bg-[#fff]"}
          signupText={"!text=[#68c1b8]"}
        />
        <div className="max-w-[1800px] w-[90%] m-auto flex ">
          <div className="w-[50%] pt-[50px] p-[20px] max-lg:w-full">
            <div className="flex flex-col pt-1 gap-8 w-full font-['Gilroy'] items-start">
              <div className="flex flex-col w-full items-start">
                <div className="text-center text-2xl font-['Quicksand'] font-semibold leading-[36px] text-[#feffff] max-lg:m-auto max-md:text-1xl">
                  Join
                </div>
                <div className="text-5xl font-bold leading-[66px] text-white w-full font-['Quicksand'] max-lg:text-center max-md:text-3xl">
                  Connect with Leading <br className="hidden md:block" /> Brands
                  and Amplify Your <br className="hidden md:block" /> Influence
                </div>
              </div>
              <div className="flex flex-col mb-0 gap-8 w-full font-['Quicksand'] items-start max-lg:text-center max-lg:items-center">
                <div className="text-lg leading-[28px] text-[#feffff] ">
                  Find the perfect influencers to promote your brand and reach a
                  wider audience.
                </div>
                <div className="flex flex-row gap-5 w-3/5 items-start max-lg:justify-center max-lg:gap-[10px]">
                  <button className="font-semibold leading-[24px] text-[#68c1b8] bg-[#feffff] flex flex-row justify-center align-middle mt-px px-[55px] py-[13px]  items-start rounded-[50px] whitespace-nowrap max-lg:px-[35px]">
                    Sign Up
                  </button>
                  <button className="font-semibold leading-[24px] text-white border-solid border-[#f9fcfc] flex flex-row justify-center px-[55px] py-[13px] items-start border rounded-[50px] whitespace-nowrap max-lg:px-[35px]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50%]  pt-[50px] relative p-[20px] hidden lg:block">
            <img
              src="/15.jpg"
              alt=""
              className="w-[505px] h-[548px] rounded-[20px] object-cover absolute left-0 bottom-[-150px]"
            />
          </div>
        </div>
      </div>

      <div className=" m-auto pt-[20px] ">
        <Stream />
      </div>

      <div className=" m-auto pt-[20px] ">
        <Unleash />
      </div>
      <Faqs />
      <PowerOfViralocity />

      <Footer />
    </main>
  );
};

export default index;
