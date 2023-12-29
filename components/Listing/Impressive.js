import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const campaigns = [
  {
    id: 1,
    name: "Successful Campaign",
    des: "Check out this influencer's amazing portfolio.",
    image: "/listing/girl1.png",
  },
  {
    id: 2,
    name: "Exciting Partnership",
    des: "Explore their past successful campaigns.",
    image: "/listing/girl2.png",
  },
  {
    id: 3,
    name: "Project Showcase",
    des: "Discover their impressive work history.",
    image: "/listing/girl3.png",
  },
];
const Impressive = () => {
  return (
    <div className="relative max-w-[1400px] w-full mx-auto lg:px-[60px] px-[20px] lg:mb-[160px] mb-[80px]">
      <div className="relative flex flex-col justify-between w-full font-['Quicksand']">
        <div className="relative flex flex-col lg:gap-4 gap-1 mb-12">
          <div className="flex flex-col w-full font-['Helvetica']">
            <div className="font-['Quicksand'] leading-[28px] text-[#232323] text-center">
              Gallery
            </div>
            <div className="lg:text-5xl text-3xl font-bold leading-[56px] text-[#232323] text-center">
              Impressive Past Campaigns
            </div>
          </div>
          <div className="text-lg leading-[28px] text-center">
            Explore our stunning collection of images for inspiration.
          </div>
        </div>
        <div className="flex flex-wrap gap-4 rounded-sm">
          {campaigns.map((item) => {
            return (
              <div key={item.id} className="flex flex-col flex-1">
                <img
                  src={item.image}
                  alt="az"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-['Helvetica'] font-bold leading-[34px] text-[#232323] w-full mt-2">
                    {item.name}
                  </div>
                  <div className="text-lg font-['Quicksand'] leading-[28px] text-[#232323]">
                    {item.des}
                  </div>
                  <div className="flex flex-row gap-3 w-full font-sans items-start">
                    <div
                      id="Tag"
                      className="text-sm font-semibold leading-[21px] text-[#232323] border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.2)] flex flex-row justify-center py-1 w-24 items-start border rounded-[103px]"
                    >
                      Tag One
                    </div>
                    <div
                      id="Tag1"
                      className="text-sm font-semibold leading-[21px] text-[#232323] border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.2)] flex flex-row justify-center py-1 w-24 items-start border rounded-[103px]"
                    >
                      Tag Two
                    </div>
                    <div
                      id="Tag2"
                      className="text-sm font-semibold leading-[21px] text-[#232323] border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.2)] flex flex-row justify-center py-1 w-1/3 items-start border rounded-[103px]"
                    >
                      Tag Three
                    </div>
                  </div>
                  <div className="flex items-center gap-1 font-['Quicksand'] underline leading-[28px] text-[#232323] cursor-pointer">
                    Read More <GoArrowUpRight />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#7bc8c0] flex flex-row justify-center self-center pt-2 h-10 items-start rounded-[24px] w-[200px] mt-20 ">
          <div
            id="Influencers"
            className="font-['Quicksand'] font-bold leading-[24px] text-white"
          >
            More View
          </div>
        </div>
      </div>
      <div className="absolute w-[448px] h-[448px] bottom-[100px] left-[-300px] bg-[#68c1b83c] rounded-[224px] blur-[50px] z-1"></div>
    </div>
  );
};

export default Impressive;
