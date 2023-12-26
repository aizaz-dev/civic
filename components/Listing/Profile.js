import React from "react";

const Profile = () => {
  return (
    <div className="max-w-[1400px] w-full lg:px-[80px] px-[20px] mx-auto lg:mb-[160px] mb-[40px]">
      <div className="profile_section">
        <div className="flex-row w-full items-start hidden md:flex">
          <img
            src="https://file.rendit.io/n/nY980a9RvYfWCPnd30ar.png"
            alt="Rectangle1"
            className="bg-[#7bc8c0] bg-[linear-gradient(rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.3))] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat rounded-[24px]"
          />
        </div>
        <div className="flex md:flex-row flex-col gap-6 md:gap-0 md:mt-[-40px] lg:px-[100px] md:px-[40px] sm:px[0px]">
          <div className="flex gap-4">
            <img
              src="/inf.png"
              className="rounded-full border-5 border-white w-[160px] h-[160px]"
              alt="inf"
            />
            <div className="flex gap-2 flex-col md:self-end">
              <div className="text-2xl font-sans font-bold leading-[33.6px] text-[#232323]">
                Mike Anderson
              </div>
              <div className="font-sans leading-[24px] text-[#232323]">
                Connect with top brands and monetize your influence.
              </div>
              <div className="flex lg:gap-3 gap-1 flex-wrap">
                <div className="border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.2)] flex flex-row justify-center pt-1 lg:w-24 w-16 items-start border rounded-[103px]">
                  <div className="lg:text-sm text-[12px] font-sans font-semibold leading-[21px] text-[#232323] mb-1">
                    Fashion
                  </div>
                </div>
                <div className="border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.2)] flex flex-row justify-center pt-1 lg:w-24 w-16 items-start border rounded-[103px]">
                  <div className="lg:text-sm text-[12px] font-sans font-semibold leading-[21px] text-[#232323] mb-1">
                    Beauty
                  </div>
                </div>
                <div className="border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.2)] flex flex-row justify-center pt-1 lg:w-24 w-16 items-start border rounded-[103px]">
                  <div className="lg:text-sm text-[12px] font-sans font-semibold leading-[21px] text-[#232323] mb-1">
                    Lifestyle
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-8 font-sans md:self-end self-center justify-self-center  md:ml-auto">
            <div className="flex flex-col  mb-2 mr-1">
              <img
                src="https://file.rendit.io/n/UXOg8yULEAAE0jOFZAVB.svg"
                alt="Group"
                className="ml-1 "
              />
              <div className="text-sm font-bold text-center leading-[19.6px] text-[#232323]">
                100 K
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/IcYt4BHuSNQKpkKVzOCb.svg"
              alt="Group1"
              className="w-12 self-start"
            />
            <div className="flex flex-col font-sans ">
              <img
                src="https://file.rendit.io/n/ypyQa38RuA69Q6RoTdcP.svg"
                alt="ClipPathGroup"
                className="w-12"
              />
              <div
                id="Text2"
                className="text-center text-sm font-bold leading-[19.6px] text-[#232323]"
              >
                1 M
              </div>
            </div>
            <div className="flex flex-col font-sans ">
              <img
                src="https://file.rendit.io/n/8kSkIeEtnzGoLj8AUGpe.svg"
                alt="LinkedinnetworklinkedinLogoicon"
                className=" w-12"
              />
              <div
                id="Text3"
                className="text-center text-sm font-bold leading-[19.6px] text-[#232323]"
              >
                10 M
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          <img
            src="/listing/money.png"
            className="md:w-1/2 rounded-lg"
            alt=""
          />
          <div className="md:w-1/2 grid grid-cols-2 gap-3 grid-rows-2 flex-wrap">
            <img src="/listing/money2.png" alt="" />
            <img src="/listing/money3.png" alt="" />
            <img src="/listing/money4.png" alt="" />
            <img src="/listing/money2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
