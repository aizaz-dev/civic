import React from "react";

const DiscoverReach = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto lg:px-[60px] px-[20px] lg:mb-[160px] mb-[80px]">
      <div className="flex flex-col gap-6">
        <p className="[font-family:'Helvetica-Bold',Helvetica] font-bold text-[#232323] lg:text-[46px] text-[30px] text-center tracking-[0] lg:leading-[56px]">
          Discover the Reach and Impressions
          <br />
          of Influencers with Viralocity
        </p>
        <p className="[font-family:'Quicksand-Regular',Helvetica] font-normal text-[#232323] text-[16px] text-center tracking-[0] leading-[28px] mb-16">
          Get valuable insights into influencer content growth and virality with
          Viralocity&#39;s detailed engagement metrics. Our platform shows you
          reach, impressions, and follower growth over time, empowering informed
          decisions for your brand. Easily track influencer campaign performance
          and optimize your marketing strategies with Viralocity.
        </p>
      </div>
      <div className="flex gap-[20px] flex-wrap">
        <div className="bg-[#7bc8c01a] flex flex-col gap-2 rounded-[24px] border border-solid border-[#2323234c] p-6 flex-1 min-w-[250px]">
          <img
            src="/listing/progress.png"
            className="w-[220px] h-[220px] object-fill  mb-6 self-center"
            alt=""
          />
          <div className="border-solid border-t border-[#232323] w-full h-px" />
          <div className="text-2xl font-['Helvetica'] font-bold leading-[34px]">
            Growth Metrics Overview
          </div>
          <p className=" [font-family:'Quicksand',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[28px]">
            <span className="font-semibold text-[#232323]">Reach</span>
            <span className="[font-family:'Quicksand',Helvetica] text-[#000000] text-[16px]">
              &nbsp;
            </span>
            <span className="[font-family:'Quicksand',Helvetica] text-[#232323] text-[16px]">
              The total number of unique users who have seen the
              influencer&#39;s content.
            </span>
          </p>
        </div>
        <div className="bg-[#7bc8c01a] flex flex-col gap-2 rounded-[24px] border border-solid border-[#2323234c] p-6 flex-1 min-w-[250px]">
          <div className="flex w-full">
            <img
              src="/listing/reach.png"
              className="flex-1 h-[220px] object-fill mb-6 ml-6 "
              alt=""
            />
            <div className="lg:text-5xl text-3xl  font-['Helvetica'] font-bold leading-[56px] text-[#232323] justify-end self-end">
              30%
            </div>
            <div className="bg-[#7bc8c0] w-2 h-10 rounded-[30px] justify-end self-end mb-2 ml-2" />
          </div>
          <div className="border-solid border-t border-[#232323] w-full h-px" />
          <div className="text-2xl font-['Helvetica'] font-bold leading-[34px]">
            Growth Metrics Overview
          </div>
          <p className="[font-family:'Quicksand',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[28px]">
            <span className="font-semibold text-[#232323]">Reach</span>
            <span className="[font-family:'Quicksand',Helvetica] text-[#000000] text-[16px]">
              &nbsp;
            </span>
            <span className="[font-family:'Quicksand',Helvetica] text-[#232323] text-[16px]">
              The total number of unique users who have seen the
              influencer&#39;s content.
            </span>
          </p>
        </div>
        <div className="bg-[#7bc8c01a] flex flex-col gap-2 rounded-[24px] border border-solid border-[#2323234c] p-6 flex-1 min-w-[250px]">
          <img
            src="/listing/lines.png"
            className="w-full h-[220px] object-cover mb-6"
            alt=""
          />
          <div className="border-solid border-t border-[#232323] w-full h-px" />
          <div className="text-2xl font-['Helvetica'] font-bold leading-[34px]">
            Growth Metrics Overview
          </div>
          <p className="[font-family:'Quicksand',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[28px]">
            <span className="font-semibold text-[#232323]">Reach</span>
            <span className="[font-family:'Quicksand-Regular',Helvetica] text-[#000000] text-[16px]">
              &nbsp;
            </span>
            <span className="[font-family:'Quicksand',Helvetica] text-[#232323] text-[16px]">
              The total number of unique users who have seen the
              influencer&#39;s content.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverReach;
