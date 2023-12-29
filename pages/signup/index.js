const Index = () => {
  return (
    <div className="relative max-w-[1400px] w-full ml-auto mr-auto lg:px-[60px] px-[20px] py-[30px] flex gap-12 overflow-hidden">
      <div className="left lg:w-1/2 w-full">
        <div className=" flex gap-3">
          <div className="w-[40px] h-[40px] bg-[#68C1B8] rounded-full gap-2"></div>
          <div className="text-xl font-['Gilroy-Bold-☞'] leading-[28.9px] text-[#7bc8c0] self-end">
            Viralocity
          </div>
        </div>
        <div className="flex flex-col">
          <div className="lg:text-5xl text-4xl lg:mt-0 mt-8 font-bold text-[#262828] text-center font-['Gilroy-Bold-☞'] mb-3">
            Sign Up
          </div>
          <div className="text-center text-lg leading-[27px] text-[#676868] mb-3">
            Lorem ipsum dolor sit amet adipiscing elit.
          </div>
          <div className="flex flex-col gap-4 w-full font-['Gilroy-Regular']">
            <div className="flex flex-col w-full">
              <label className="text-lg font-['Gilroy-Bold-☞'] leading-[27px] text-[#262828]">
                Name
              </label>
              <input
                className="leading-[24px] px-[28px] py-[20px] text-[#848484] border-solid flex flex-row w-full h-16 items-start  border-black border rounded-lg box-border"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-4 w-full items-start">
              <div className="flex flex-col w-full items-start">
                <label className="text-center text-lg font-['Gilroy-Bold-☞'] leading-[27px] text-[#262828]">
                  Email
                </label>
                <input
                  className="leading-[24px] px-[28px] py-[20px] text-[#848484] border-solid flex flex-row w-full h-16 items-start border-black border rounded-lg"
                  placeholder="You@gmail.com"
                />
              </div>
              <div className="flex flex-col w-full items-start">
                <label className="text-center text-lg font-['Gilroy-Bold-☞'] leading-[27px] text-[#262828]">
                  Password
                </label>
                <input
                  className="leading-[24px] px-[28px] py-[20px] text-[#848484] border-solid flex flex-row w-full h-16 items-start border-black border rounded-lg"
                  placeholder=" *******************"
                />
              </div>
              <div className="relative flex flex-col gap-5 w-full font-['Quicksand'] items-start">
                <div className="w-full py-3 font-semibold leading-[24px] text-white shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#7bc8c0] flex flex-row justify-center items-start rounded-[50px]">
                  Sign Up
                </div>
                <div className="flex flex-row w-full items-start">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="text-center font-semibold leading-[24px] text-[#848484]">
                      Already have an account?
                      {"  "}
                      <span className="font-['Quicksand'] underline font-bold text-[#7bc8c0]">
                        Log In
                      </span>
                    </div>
                    <div className="flex flex-row justify-between w-full font-['Gilroy-SemiBold'] items-start pb-20">
                      <div className="flex flex-col w-full">
                        <div className="font-['Quicksand'] text-center text-2xl leading-[36px] text-[#262828] !font-medium">
                          Or
                        </div>
                        <div className="flex flex-row w-full justify-center">
                          <img
                            src="https://file.rendit.io/n/HYQvFk29cwMWOsW15Roq.svg"
                            alt="Group3"
                            className="w-24"
                          />
                          <img
                            src="https://file.rendit.io/n/3HJjTAOSIBjzKrvcvO79.svg"
                            alt="Group2"
                            className="w-24"
                          />
                        </div>
                      </div>
                      <div className="blur-[79px] bg-[rgba(104,_193,_184,_0.52)] w-full h-[448px] rounded-[50%] absolute bottom-[-400px] left-1/2 right-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 lg:block hidden">
        <img src="/Rectangle 79.png" alt="" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Index;
