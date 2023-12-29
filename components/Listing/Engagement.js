import React from "react";

const Engagement = () => {
  return (
    <div className="flex flex-row w-full bg-[rgba(123,_200,_192,_0.1)] lg:px-[60px] px-[20px] lg:mb-[160px] mb-[80px]">
      <div className="flex flex-row  max-w-[1400px] mx-auto py-[60px]">
        <div className="flex flex-col gap-16 font-['Helvetica'] ">
          <div className="lg:text-5xl text-3xl  font-bold leading-[56px] text-[#232323] text-center">
            Engagement Metrics
          </div>
          <div className="flex lg:flex-row flex-col gap-20 lg:justify-center mx-auto my-auto w-full ">
            <div className="flex flex-row gap-3 w-1/3">
              <img
                src="https://file.rendit.io/n/zmB3eIvKWuUe704geICH.svg"
                alt="Group"
                className="w-24"
              />
              <div className="flex flex-col font-['Quicksand'] ">
                <div className="text-6xl font-['Helvetica'] font-bold leading-[66px] text-[#7bc8c0]">
                  10K
                </div>
                <div className="opacity-50 text-lg font-semibold text-[#333333]">
                  Subscribers
                </div>
              </div>
            </div>
            <div className="flex flex-row w-1/3 gap-3 ">
              <img
                src="https://file.rendit.io/n/EjDh5ZjYWNcqtNKn4tS9.svg"
                alt="Group1"
                className="mt-0 w-24"
              />
              <div className="flex flex-col gap-px font-['Quicksand'] ">
                <div className=" text-6xl font-['Helvetica'] font-bold leading-[66px] text-[#7bc8c0]">
                  10K
                </div>
                <div className="lg:text-center opacity-50 text-lg font-semibold text-[#333333] whitespace-nowrap">
                  Average Engagement Rate
                </div>
              </div>
            </div>
            <div className="flex flex-row w-1/3 gap-3 ">
              <img
                src="https://file.rendit.io/n/ahcIBBJPfgWHSTtHS5At.svg"
                alt="Group2"
                className="mt-0 w-24"
              />
              <div className="flex flex-col gap-px w-2/3 font-['Quicksand'] ">
                <div className="text-6xl font-['Helvetica'] font-bold leading-[66px] text-[#7bc8c0]">
                  10K
                </div>
                <div
                  id="AudienceDemographics"
                  className="lg:text-center opacity-50 text-lg font-semibold text-[#333333] whitespace-nowrap"
                >
                  Audience Demographics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
