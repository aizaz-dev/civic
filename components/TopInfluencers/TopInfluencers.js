import React from "react";
const topInfluenceData = [
  {
    image: "./inf.png",
    personName: "Winee Dieze",
    personCountry: "USA",
  },
  {
    id: 2,
    image: "./inf2.png",
    personName: "Izabeth Rabi",
    personCountry: "USA",
    postedFrom: "instaico.png",
  },
  {
    image: "./inf3.png",
    personName: "James Robert",
    personCountry: "USA",
  },
  {
    image: "inf4.png",
    personName: "Winee Dieze",
    personCountry: "USA",
  },
  {
    image: "inf5.png",
    personName: "Izabeth Robi",
    personCountry: "USA",
  },
  {
    image: "inf6.png",
    personName: "Jia Lumz",
    personCountry: "USA",
  },
];
const TopInfluencers = () => {
  return (
    <div className="TopInfluencers">
      <div className="lg-mb-20 mb-10 lg:mt-28 mt-12">
        <div className="text-[30px] lg:text-[46px] font-['Gilroy-Bold-☞'] leading-[55.2px] capitalize text-[#232323]">
          Top Influencers
        </div>
        <div
          id="InfluencersRoot"
          className="font-['Quicksand'] leading-[24px] text-[16px] lg:mb-20 mb:16 "
        >
          Explore our diverse influencers in various social platforms
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows2  gap-4 ">
          {topInfluenceData.map((item) => {
            return (
              <div className="relative" key={item.id}>
                <img
                  className="w-full object-cover"
                  id={"img" + item.id}
                  src={item.image}
                  alt={item.name}
                />
                <div className="flex items-center p-2 absolute top-4 left-0 w-[239px] h-[72px] bg-[#fdfdfd74] backdrop-blur-20 blur-20 rounded-r-full">
                  <img
                    src="/Image-52.png"
                    className="!w-[45px] h-[45px] object-cover"
                    alt=""
                  />
                  <div className=" justify-self-start self-start ml-2">
                    <div className=" [font-family:'Quicksand',Helvetica] font-bold text-black text-[18px] whitespace-nowrap">
                      {item.personName}
                    </div>
                    <div>{item.personCountry}</div>
                  </div>
                  <img
                    className="!w-[30px] h-[30px] ml-auto"
                    src="/insta.png"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopInfluencers;
