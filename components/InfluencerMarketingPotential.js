import React from "react";

const InfluencerMarketingPotential = () => {
  return (
    <div id="ComponentRoot" className="flex flex-row w-full items-start">
      <div className=" flex flex-row gap-12 w-full items-start pt-20">
        <div className="flex flex-col lg:mt-48 mt-12 gap-5 lg:w-1/2 w-full items-start">
          <div className="flex flex-col justify-between gap-2 w-full items-start">
            <div
              id="Influencers"
              className="font-['Quicksand'] font-bold leading-[24px] text-[#ff7c53]"
            >
              Connect
            </div>
            <div
              id="Influencers2"
              className="text-[30px] lg:text-[46px] font-['Gilroy-Bold-☞'] lg:leading-[55.2px] capitalize text-[#232323] w-full"
            >
              Unlock Your Influencer Marketing Potential
            </div>
            <div
              id="Influencers1"
              className="font-['Quicksand'] leading-[24px] text-[#3a3a3a] w-full"
            >
              Viralocity is the marketplace that connects influencers with
              brands, allowing influencers to post ads on their social media
              platforms. With Viralocity, brands gain valuable insights from
              each campaign and can even schedule recurrent campaigns for
              maximum impact.
            </div>
          </div>
          <div className="flex flex-row gap-12 items-start">
            <div className="font-['Quicksand'] leading-[24px] text-white bg-[#68c1b8] flex flex-row justify-center pt-2 !w-[150px] h-10 items-start rounded-[24px]">
              Learn More
            </div>
            <div
              id="Influencers4"
              className="font-['Quicksand'] !w-[190px] leading-[24px] text-[#232323] mt-2"
            >
              Sign Up
            </div>
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/Zd704NIqEAPoQxXpoRXR.png"
          alt="Rectangle1"
          className="mt-12 mb-20 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default InfluencerMarketingPotential;
