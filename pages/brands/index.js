import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PowerOfViralocity from "../../components/Influencers-signup/PowerOfViralocity";

const index = () => {
  return (
    <main className="">
      <div className=" w-[100%] m-auto flex items-center justify-center bg-[#7bc8c0] p-[60px  ]">
        <div className="w-[1400px]">
          <Header
            bg={"bg-[#68c1b8]"}
            textOff={"!text-[#fff]"}
            title={"!text-[#fff]"}
            signupBg={"!bg-[#fff]"}
            signupText={"!text=[#68c1b8]"}
          />
          <div className="w-[100%]  flex items-center justify-center p-[30px]">
            <div className=" flex flex-col items-center gap-[20px] mt-[40px] mb-[100px] p-[60px]">
              <div className="text-center text-lg font-['Quicksand'] leading-[28px] text-white w-min">
                Discover
              </div>
              <div className="text-center text-6xl font-['Gilroy-Bold'] leading-[79.2px] text-white max-md:text-3xl">
                Connect with influencers
              </div>
              <div className="text-center text-lg font-['Quicksand'] leading-[27px] text-white max-md:text-3xl max-md:text-2xl">
                Find the perfact influencers to promot your brands and reach a
                wide audience
              </div>
              <div className=" flex flex-row gap-[20px]">
                <div className="bg-white flex flex-row justify-center rounded-[50px] px-[25px] py-[12px]">
                  <div className="font-['Quicksand'] font-semibold leading-[24px] text-[#666666]">
                    Get Started
                  </div>
                </div>
                <div className="border-solid border-white flex flex-row justify-center px-[25px] py-[12px] border rounded-[50px]">
                  <div className="font-['Quicksand'] font-semibold leading-[24px] text-white">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 2nd */}
      <div className="max-w-[2000px] w-[100%] bg-[#7BC8C0] flex items-center justify-center p-[60px]">
        <div className="w-[1400px] p-[60px] ">
          <div className=" flex justify-between ">
            <div className="flex flex-col gap-8 w-[50%] font-['Quicksand'] items-start mt-[100px] max-lg:w-full p-[30px]">
              <div className="flex flex-col mb-px gap-1 w-full font-['Gilroy'] items-start max-lg:justify-center max-lg:items-center">
                <div className="text-center text-2xl leading-[34px] text-[#7bc8c0] lg:text-center">
                  Connect
                </div>
                <div className="text-5xl font-bold leading-[56px] text-[#232323] w-full max-lg:text-center max-md:text-3xl">
                  Find the Perfect Match for <br /> Your Brand
                </div>
              </div>
              <div
                id="Text1"
                className="text-lg leading-[28px] text-[#666666] mb-px w-full max-lg:text-center  "
              >
                Our platform makes it easy for brands to connect and collaborate
                with influencers who align with their values and target
                audience. With our powerful matchmaking algorithm, you can find
                the perfect influencer to promote your brand and reach a wider
                audience.
              </div>
              <div className="flex flex-col justify-between gap-3 w-[400px] h-[386px] font-['Quicksand'] items-start max-lg:w-full max-lg:items-center max-lg:justify-center">
                <div className="flex gap-1 w-full items-start max-lg:items-center max-lg:justify-center">
                  <img
                    src="https://file.rendit.io/n/E4MID8PU4t1hu825i5O8.svg"
                    alt="MaskGroup"
                    className="mt-1 w-5"
                  />
                  <div className="font-semibold leading-[28px] text-[#333333] ">
                    Efficient Brand-Influencer Matchmaking
                  </div>
                </div>
                <div className="flex gap-1 w-[400px] h-[386px]  items-start">
                  <img
                    src="https://file.rendit.io/n/rrGbUrA48xCL9vsaZjEe.svg"
                    alt="MaskGroup1"
                    className="mt-1 w-5"
                  />
                  <div className="font-semibold leading-[28px] text-[#333333] ">
                    Increase Brand Awareness and Reach
                  </div>
                </div>
                <div className="flex flex-row gap-1  font-['Quicksand'] items-start">
                  <img
                    src="https://file.rendit.io/n/NLG5K875sAInL1LrHvnF.svg"
                    alt="MaskGroup2"
                    className="mt-1 w-5"
                  />
                  <div className="font-semibold leading-[28px] text-[#333333] ">
                    Drive Sales and Engagement
                  </div>
                </div>
              </div>
              <div className="flex flex-row mb-0 gap-[20px] w-[400px] h-[386px] font-['Quicksand'] items-start max-lg:items-center max-lg:w-full max-lg:justify-center">
                <button className="font-semibold leading-[24px] text-white bg-[#7bc8c0] flex flex-row justify-center py-[18px] px-[25px]  items-start rounded-[50px]">
                  Get Started
                </button>
                <button className="font-semibold leading-[24px] text-[#28302f] border-solid border-[#272c2b] flex flex-row justify-center py-[18px] px-[25px] items-start border rounded-[50px]">
                  Learn More
                </button>
              </div>
            </div>

            <img
              src="https://file.rendit.io/n/mDYZSB3JtVWPGTcjRsyE.png"
              alt="Rectangle"
              className="w-min mt-[100px] hidden lg:block"
            />
          </div>
        </div>
      </div>

      {/* page 3rd*/}

      <div className="w-[100%] flex items-center justify-center  pb-11  ">
        <div className="max-w-[1400px] p-[30px]">
          <div className="flex  justify-between w-full font-['Quicksand'] items-start mt-[150px] gap-[100px] p-[60px] max-md:flex-col">
            <div className="w-[400px] h-[386px] border-solid border-[rgba(35,_35,_35,_0.3)] bg-[rgba(123,_200,_192,_0.1)] flex flex-col justify-center gap-5  items-start px-5 py-8 border rounded-[24px]">
              <img
                src="https://file.rendit.io/n/xgP8Lki3VtLE4UqFUk5h.svg"
                alt="MaskGroup"
                className="w-20"
              />
              <div className="flex flex-col gap-2 w-full items-start ">
                <div
                  id="Heading"
                  className="text-2xl font-['Gilroy-Bold'] leading-[31.2px] text-[#232323] w-full"
                >
                  Unlock the Power of Influencer Marketing
                </div>
                <div
                  id="Text1"
                  className="text-lg leading-[27px] text-[#666666] w-full"
                >
                  Connect with your target audience, track campaign performance,
                  and manage your influencer marketing all in one place.
                </div>
              </div>
              <div className="flex flex-row gap-5 w-3/4 items-start">
                <div className="font-semibold leading-[24px] text-white bg-[#7bc8c0] flex flex-row justify-center py- items-start rounded-[50px]">
                  Sign Up
                </div>
                <div className="underline font-semibold leading-[24px] text-[#232323] mt-3">
                  Learn More
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-8 gap-5 w-[400px] h-[386px] items-start">
              <img
                src="https://file.rendit.io/n/JwHdXkhEbZXUP65yHvaL.svg"
                alt="MaskGroup1"
                className="w-20"
              />
              <div className="flex flex-col gap-2 w-full items-start">
                <div
                  id="Heading1"
                  className="text-2xl font-['Gilroy-Bold'] leading-[31.2px] text-[#232323] w-full"
                >
                  Reach Your Audience with Precision
                </div>
                <div
                  id="Text2"
                  className="text-lg leading-[27px] text-[#666666] w-full"
                >
                  Leverage our advanced audience targeting capabilities to
                  ensure your brand message reaches the right people.
                </div>
              </div>
              <div className="flex flex-row gap-5 w-3/4 items-start">
                <div className="font-semibold leading-[24px] text-white bg-[#7bc8c0] flex flex-row justify-center pt-3 w-3/5 h-12 items-start rounded-[50px]">
                  Sign Up
                </div>
                <div className="underline font-semibold leading-[24px] text-[#232323] mt-3">
                  Learn More
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-5 gap-5 w-[400px] h-[386px] font-['Quicksand'] items-start">
              <img
                src="https://file.rendit.io/n/LChoIrb24Dwl3yQm5GUh.svg"
                alt="MaskGroup2"
                className="w-20"
              />
              <div className="flex flex-col gap-2 w-full items-start">
                <div
                  id="Heading2"
                  className="text-2xl font-['Gilroy-Bold'] leading-[31.2px] text-[#232323] w-full"
                >
                  Track and Optimize Your Campaigns
                </div>
                <div
                  id="Text3"
                  className="text-lg leading-[27px] text-[#666666] w-full"
                >
                  Access detailed analytics to measure the success of your
                  influencer marketing campaigns and make data-driven decisions.
                </div>
              </div>
              <div className="flex flex-row gap-5 w-3/4 items-start">
                <div className="font-semibold leading-[24px] text-white bg-[#7bc8c0] flex flex-row justify-center pt-3 w-3/5 h-12 items-start rounded-[50px]">
                  Sign Up
                </div>
                <div className="underline font-semibold leading-[24px] text-[#232323] mt-3">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[2000px] m-auto py-[70px] ">
        <h1 className="text-center">Success Stories</h1>
        <p className="text-center">
          Hear what our clients have to say about us
        </p>
        <div className="max-w-[1500px] m-auto py-[60px] ">
          <div className="flex  justify-center gap-8 mt-20 w-[100%] m-auto font-['Quicksand'] p-[30px] max-md:flex-col max-md:justify-center max-md:p-[30px] ">
            <div className="border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.1)] flex flex-col justify-between w-[350px] h-[241px] items-start pl-3 py-4 border rounded-lg">
              <img
                src="https://file.rendit.io/n/EeCngqn2hnRjy7VWz8sy.svg"
                alt="Logo"
                id="Logo"
                className="ml-[295px] w-20"
              />
              <div className="text-lg leading-[28px] text-[#232323] w-full">
                Our partnership with Viralocity has been a game-changer.
              </div>
              <div className="flex flex-row gap-5 w-full items-start">
                <img
                  src="https://file.rendit.io/n/QtlHhgxUPoBVq3AlJgVT.png"
                  alt="Ellipse"
                  id="Ellipse"
                  className="w-20"
                />
                <div className="flex flex-col m-auto mt-2 w-3/4 font-['Quicksand'] items-start">
                  <div className="text-center text-2xl font-['Gilroy'] font-bold leading-[34px]">
                    John Doe
                  </div>
                  <div className="text-center opacity-50 leading-[28px]">
                    Marketing Director, XYZ Company
                  </div>
                </div>
              </div>
            </div>
            <div className="border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.1)] flex flex-col justify-between w-[350px] h-[241px] items-start pl-3 py-4 border rounded-lg">
              <img
                src="https://file.rendit.io/n/EeCngqn2hnRjy7VWz8sy.svg"
                alt="Logo1"
                id="Logo1"
                className="ml-[295px] w-20"
              />
              <div className="text-lg leading-[28px] w-full">
                Viralocity helped us reach a wider audience and increase brand
                awareness.
              </div>
              <div className="flex flex-row gap-5 w-2/3 items-start">
                <img
                  src="https://file.rendit.io/n/lJCWXljEYRW1EuB11It7.png"
                  alt="Ellipse1"
                  id="Ellipse1"
                  className="w-20"
                />
                <div className="flex flex-col mt-2 w-3/5 font-['Quicksand'] items-start">
                  <div className="text-center text-2xl font-['Gilroy'] font-bold leading-[34px]">
                    Jane Smith
                  </div>
                  <div className="text-center opacity-50 leading-[28px]">
                    CEO, ABC Corporation
                  </div>
                </div>
              </div>
            </div>
            <div className="border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.1)] flex flex-col justify-between w-[350px] h-[241px] font-['Quicksand'] items-start pl-3 py-4 border rounded-lg">
              <img
                src="https://file.rendit.io/n/EeCngqn2hnRjy7VWz8sy.svg"
                alt="Logo2"
                id="Logo2"
                className="ml-[295px] w-20"
              />
              <div className="text-lg leading-[28px] w-full">
                Working with Viralocity has been a fantastic experience.
              </div>
              <div className="flex flex-row gap-5 w-2/3 items-start">
                <img
                  src="https://file.rendit.io/n/QObTpr4mO2UEQcTKbPno.png"
                  alt="Ellipse2"
                  id="Ellipse2"
                  className="w-20"
                />
                <div className="flex flex-col mt-2 w-3/5 font-['Quicksand'] items-start">
                  <div className="text-center text-2xl font-['Gilroy'] font-bold leading-[34px]">
                    David Johnson
                  </div>
                  <div className="text-center opacity-50 leading-[28px]">
                    Founder, 123 Startup
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[2000px] m-auto text-center py-[100px] pb-[100px]">
        <h1 className="max-md:text-3xl">
          Trusted By Top Global Brands For <br /> Influencer Marketing
        </h1>
        <div className="max-w-[2000px] m-auto mt-[200px] py-[100px] ">
          <div className="flex flex-row justify-between w-full m-auto items-start mt-[200px] py-[60px] bg-[#EBF7F6] max-md:hidden">
            <img
              src="https://file.rendit.io/n/uV3LYBaXrM1NESKueBzs.svg"
              alt="Vector"
              className="ml-[-169.5px] "
            />
            <img
              src="https://file.rendit.io/n/xVE0iaWQefNWuoZcm8fI.svg"
              alt="Vector1"
            />
            <img
              src="https://file.rendit.io/n/xVE0iaWQefNWuoZcm8fI.svg"
              alt="Vector2"
            />
            <img
              src="https://file.rendit.io/n/5C6DQhLnXFSxRb8FsmXp.svg"
              alt="Vector3"
            />
            <img
              src="https://file.rendit.io/n/6lfThAw6avfBlUCvzFgg.svg"
              alt="Vector4"
              className="mr-[-169.5px]]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[2000px] m-auto !mt-[70px] pt-15 pb-10">
        <div className="flex flex-col gap-16 w-full m-auto font-['Gilroy'] items-center">
          <div className="flex flex-col justify-center gap-3 w-1/2 items-center">
            <div
              id="Subheading"
              className="text-2xl font-bold leading-[25px] text-[#7bc8c0] text-center"
            >
              Connect
            </div>
            <div
              id="Heading"
              className="text-center text-5xl font-bold leading-[56px] text-[#232323] w-full max-md:text-3xl "
            >
              Streamline Your Influencer Collaboration Process
            </div>
          </div>
          <div className="flex gap-8 justify-between w-[80%] items-start max-md:flex-col">
            <div className="border-solid border-[#7bc8c0] bg-[rgba(104,_193,_184,_0.1)] flex flex-col justify-center gap-1 w-[295px] h-[217px] items-start p-[20px] border-2 rounded-lg">
              <div className="text-center text-5xl font-bold leading-[56px] text-[#7bc8c0] ml-1">
                01
              </div>
              <div className="text-center text-2xl font-bold leading-[34px] text-[#232323] ml-1">
                Sign UP
              </div>
              <div
                id="Text1"
                className="font-['Quicksand'] leading-[28px] text-[#232323] ml-1 w-full"
              >
                Create an account and start listing your services on our
                marketplace.
              </div>
            </div>
            <div className="border-solid border-[#7bc8c0] bg-[rgba(104,_193,_184,_0.1)] flex flex-col justify-center gap-1 w-[295px] h-[217px] items-start p-[20px] border-2 rounded-lg">
              <div className="text-center text-5xl font-bold leading-[56px] text-[#7bc8c0] ml-1">
                02
              </div>
              <div className="text-center text-2xl font-bold leading-[34px] text-[#232323] ml-1">
                Search
              </div>
              <div
                id="Text2"
                className="font-['Quicksand'] leading-[28px] text-[#232323] ml-1 w-full"
              >
                Easily search and discover influencers that align with your
                brand.
              </div>
            </div>
            <div className="border-solid border-[#7bc8c0] bg-[rgba(104,_193,_184,_0.1)] flex flex-col justify-center gap-1 w-[295px] h-[217px] font-['Gilroy'] items-start  p-[20px] border-2 rounded-lg">
              <div className="text-center text-5xl font-bold leading-[56px] text-[#7bc8c0] ml-2">
                03
              </div>
              <div className="text-center text-2xl font-bold leading-[34px] text-[#232323] ml-2">
                Collaborate
              </div>
              <div
                id="Text3"
                className="font-['Quicksand'] leading-[28px] text-[#232323] ml-2 w-full"
              >
                Effortlessly collaborate with influencers to create impactful
                campaigns.
              </div>
            </div>
            <div className="border-solid border-[#7bc8c0] bg-[rgba(104,_193,_184,_0.1)] flex flex-col justify-center gap-1 w-[295px] h-[217px] font-['Gilroy'] items-start p-[20px] border-2 rounded-lg">
              <div className="text-center text-5xl font-bold leading-[56px] text-[#7bc8c0]">
                04
              </div>
              <div className="text-center text-2xl font-bold leading-[34px] text-[#232323]">
                Grow
              </div>
              <div
                id="Text4"
                className="font-['Quicksand'] leading-[28px] text-[#232323] w-full"
              >
                Grow your brand&apos;s reach and engage with your target audience.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <PowerOfViralocity />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
};

export default index;
