import React from "react";

const PowerOfViralocity = () => {
  return (
    <div className="m-auto  py-[7%]  flex items-center justify-center z-30 relative">
      {/* Second Box Child */}
      <div className="w-[81%] max-w-[2000px] py-[8%] bg-[#68C1B8] rounded-[15px] flex items-center justify-center flex-col gap-2">
        {/* Discover the power of Viralocity ==> H1 */}
        <div className="text-center font-bold text-[46px] max-md:text-[30px]">
          <h1 className="font-['Gilroy-Bold-☞'] text-white">
          Join Our Influencer Marketplace
          </h1>
        </div>
        {/* //Discover the power of Viralocity ==> H1 */}

        {/* Discover the power of Viralocity ==> p tag */}
        <div className="text-center font-['Quicksand'] leading-[24px] text-white">
          <p>Join Our Influencer Marketplace</p>
        </div>
        {/* //Discover the power of Viralocity ==> p tag */}

        {/* Buttons DIV */}
        <div className="flex items-center justify-center gap-8 max-md:gap-4 flex-wrap mt-[1.5%]">
          <button
            style={{ border: "solid white 1px" }}
            className="py-[10px] px-[32px] max-md:px-[20px] rounded-[25px] cursor-pointer outline-none font-['Quicksand'] text-white"
          >
            Learn More
          </button>
          <button
           
            className="py-[10px] px-[32px] max-md:px-[20px] bg-white rounded-[25px] cursor-pointer outline-none font-['Quicksand']"
          >
            Join Us
          </button>
        </div>
        {/* //Buttons DIV */}
      </div>
      {/* //Second Box Child */}
    </div>
  );
};

export default PowerOfViralocity;
