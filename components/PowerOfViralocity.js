import React from "react";

const PowerOfViralocity = () => {
  return (
    <div className="m-auto bg-[#F3F3F3]  py-[5%]  flex items-center justify-center">
      {/* Second Box Child */}
      <div className="w-[95%] max-w-[1500px] py-[8%] bg-[#68C1B8] rounded-[15px] flex items-center justify-center flex-col gap-2">
        {/* Discover the power of Viralocity ==> H1 */}
        <div className="text-center font-bold text-[46px] max-md:text-[30px]">
          <h1 className="font-['Gilroy-Bold-☞']">
            Discover the power of Viralocity
          </h1>
        </div>
        {/* //Discover the power of Viralocity ==> H1 */}

        {/* Discover the power of Viralocity ==> p tag */}
        <div className="text-center font-['Quicksand'] leading-[24px]">
          <p>Discover the power of Viralocity</p>
        </div>
        {/* //Discover the power of Viralocity ==> p tag */}

        {/* Buttons DIV */}
        <div className="flex items-center justify-center gap-8 flex-wrap mt-[1.5%]">
          <button
            style={{ border: "solid black 1px" }}
            className="py-[10px] px-[32px] rounded-[25px] cursor-pointer outline-none font-['Quicksand']"
          >
            Learn More
          </button>
          <button
            style={{ border: "solid black 1px" }}
            className="py-[10px] px-[32px] bg-white rounded-[25px] cursor-pointer outline-none font-['Quicksand']"
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
