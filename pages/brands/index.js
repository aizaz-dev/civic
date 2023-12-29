import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sliderbrands from "../../components/brands/Sliderbrands";
import PowerOfViralocity from "../../components/brands/PowerOfViralocity-brand";
import Faqs from "../../components/brands/Faqs";
const Index = () => {
  return (
    <main>
      <div className="brands w-[100%] m-auto flex items-center justify-center bg-[#68C1B8] ">
        <div className="max-w-[1400px] w-full">
          <Header 
           bg={"bg-[#68c1b8]"}
           textOff={"!text-[#fff]"}
           title={"!text-[#fff]"}
           signupBg={"!bg-[#fff]"}
           signupText={"!text=[#68c1b8]"}
          />
          <div className="max-w-[1400px]   flex items-center justify-center p-[30px] ">
            <div className=" flex flex-col items-center gap-[20px] mb-[80px] lg:mt-20 ">
              <div className="text-center text-lg font-['Quicksand'] leading-[20px] text-white">
                Discover
              </div>
              <div className="text-center text-6xl font-['Gilroy'] leading-[79.2px] text-white max-md:text-3xl">
                Connect with influencers
              </div>
              <div className="text-center text-lg font-['Quicksand'] leading-[27px] text-white  ">
                Find the perfact influencers to promot your brands and reach a
                wide audience
              </div>
              <div className=" flex flex-row gap-[20px]">
                <div className="bg-white flex flex-row justify-center rounded-[50px] lg:px-[45px] px-[30px] py-[12px]">
                  <div className="font-['Quicksand'] font-semibold leading-[24px] text-[#666666] whitespace-nowrap">
                    Get Started
                  </div>
                </div>
                <div className="border-solid border-white flex flex-row justify-center lg:px-[45px] px-[30px] py-[12px] border rounded-[50px]">
                  <div className="font-['Quicksand'] font-semibold leading-[24px] text-white whitespace-nowrap">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* page 2nd */}
      <div className=" w-[100%] m-auto bg-[#7bc8c038] lg:px-[80px] py-[60px]  flex items-center justify-center">
        <div className="max-w-[1400px] m-auto flex items-center  justify-center">
          <div className=" w-[95%] flex justify-between max-md:p-0">
            <div className="flex flex-col gap-[30px] w-[55%] font-['Quicksand'] items-start  max-lg:w-full p-[30px]">
              <div className="flex flex-col mb-px gap-1 w-full font-['Gilroy-Light'] items-start max-lg:justify-center max-lg:items-center">
                <div className="text-center text-2xl font-[300] leading-[34px] text-[#7bc8c0] lg:text-center">
                  Connect
                </div>
                <div className="text-[46px] font-bold font-[Helvetica] leading-[56px] text-[#232323] w-full max-lg:text-center max-md:text-3xl">
                  Find the Perfect Match for Your Brand
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
              <div className="flex flex-col justify-start gap-3  font-['Quicksand'] items-start max-lg:w-full max-lg:items-center max-lg:justify-center max-md:justify-start max-md:items-start">
                <div className="flex gap-1 items-start max-lg:items-center max-lg:justify-center">
                  <img
                    src="https://file.rendit.io/n/E4MID8PU4t1hu825i5O8.svg"
                    alt="MaskGroup"
                    className="mt-1 w-5"
                  />
                  <div className="font-semibold leading-[28px] text-[#333333] ">
                    Efficient Brand-Influencer Matchmaking
                  </div>
                </div>
                <div className="flex gap-1  items-start">
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
              <div className="flex flex-row mb-0 gap-[20px] w-[500px] font-['Quicksand'] items-start max-lg:items-center max-lg:w-full max-lg:justify-center">
                <button className="font-semibold leading-[24px] text-white bg-[#7bc8c0] flex flex-row justify-center py-[12px] px-[24px]  items-start rounded-[50px] whitespace-nowrap">
                  Get Started
                </button>
                <button className="font-semibold leading-[24px] text-[#28302f] border-solid border-[#272c2b] flex flex-row justify-center py-[12px]  px-[24px] items-start border rounded-[50px] whitespace-nowrap">
                  Learn More
                </button>
              </div>
            </div>

            <img
              src="https://file.rendit.io/n/mDYZSB3JtVWPGTcjRsyE.png"
              alt="Rectangle"
              className="w-min p-[30px]  hidden lg:block h-[617px]"
            />
          </div>
        </div>
      </div>

      {/* page 3rd*/}

      <div className="max-w-[1400px] m-auto flex items-center justify-center  pb-11  ">
        <div className="w-full m-auto ">
          <div className=" flex p-[80px] max-lg:flex-col font-['Quicksand'] justify-center items-center mt-[80px] gap-[5%] max-md:flex-col">
            <div className="w-[400px] h-[386px] max-md:w-[350px] max-md:h-[350px] max-lg:w-[700px] border-solid border-[rgba(35,_35,_35,_0.3)] bg-[rgba(123,_200,_192,_0.1)] flex flex-col justify-center gap-4 max-md:gap-[8px]  items-start p-[20px] border rounded-[24px]">
              <img
                src="https://file.rendit.io/n/xgP8Lki3VtLE4UqFUk5h.svg"
                alt="MaskGroup"
                className="w-20 max-md:w-10"
              />
              <div className="flex flex-col gap-2 w-full items-start ">
                <div
                  id="Heading"
                  className="text-[24px] font-[Gilroy-Bold-☞] font-[400] leading-[31.2px] text-[#232323] w-full max-md:text-[20px]"
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
              <div className="flex gap-5 w-3/4 items-center">
                <button className="font-semibold leading-[24px] text-white bg-[#7bc8c0] py-2 px-[25px] rounded-[50px]  whitespace-nowrap">
                  Sign Up
                </button>
                <button className="underline font-semibold leading-[24px] text-[#232323] py-2 px-[25px] whitespace-nowrap">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-[400px] h-[386px]  max-lg:w-[700px] max-md:w-[350px] max-md:h-[350px]  flex flex-col justify-center gap-4 max-md:gap-3  items-start p-[20px]  ">
              <img
                src="https://file.rendit.io/n/JwHdXkhEbZXUP65yHvaL.svg"
                alt="MaskGroup1"
                className="w-20 max-md:w-10"
              />
              <div className="flex flex-col gap-2 w-full items-start">
                <div
                  id="Heading1"
                  className="text-2xl font-[Gilroy-Bold-☞] leading-[31.2px] text-[#232323] w-full max-md:text-[20px]"
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
              <div className="flex gap-5 w-3/4 items-center">
                <button className="font-semibold leading-[24px] text-white bg-[#7bc8c0] py-2 px-[25px] items-start rounded-[50px] whitespace-nowrap">
                  Sign Up
                </button>
                <button className="underline font-semibold leading-[24px] text-[#232323] py-2 px-[25px] whitespace-nowrap">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-[400px] h-[386px]  max-lg:w-[700px] max-md:w-[350px] max-md:h-[350px] flex flex-col justify-center gap-4  items-start p-[20px] ">
              <img
                src="https://file.rendit.io/n/LChoIrb24Dwl3yQm5GUh.svg"
                alt="MaskGroup2"
                className="w-20 max-md:w-10"
              />
              <div className="flex flex-col gap-2 w-full items-start">
                <div
                  id="Heading2"
                  className="text-2xl font-[Gilroy-Bold-☞] leading-[31.2px] text-[#232323] w-full max-md:text-[20px]"
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
              <div className="flex gap-5 w-3/4 items-center">
                <div className="font-semibold leading-[24px] text-white bg-[#7bc8c0] flex flex-row justify-center py-2 px-[25px]  rounded-[50px] whitespace-nowrap">
                  Sign Up
                </div>
                <div className="underline font-semibold leading-[24px] text-[#232323] py-2 px-[25px] whitespace-nowrap">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="max-w-[1400px] m-auto  mt-24">
        <h1 className="text-center text-[46px] max-md:text-3xl font-[700]">Success Stories</h1>
        <p className="text-center">
          Hear what our clients have to say about us
        </p>
        <div className="max-w-[2000px] m-auto  ">
          <div className="flex  justify-center gap-[25px] w-[100%] m-auto font-['Quicksand'] pb-[80px] px-[80px] max-md:flex-col max-md:justify-center max-md:items-center max-md:p-[30px] max-lg:flex-col max-lg:items-center">
            <div className="border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.1)] flex flex-col justify-between items-center w-[401px] max-md:w-[350px] max-md:h-[220px] h-[246px] max-lg:w-[700px] max-lg:h-[300px] pl-8 py-4 border rounded-lg">
              <img
                src="https://file.rendit.io/n/EeCngqn2hnRjy7VWz8sy.svg"
                alt="Logo"
                id="Logo"
                className="ml-[70%] w-20"
              />
              <div className="text-[18px] leading-[28px] text-[#232323] w-full">
                Our partnership with Viralocity has been a game-changer.
              </div>
              <div className="flex gap-3 w-full items-start ">
                <img
                  src="https://file.rendit.io/n/QtlHhgxUPoBVq3AlJgVT.png"
                  alt="Ellipse"
                  id="Ellipse"
                  className="w-20 max-md:w-[50px]"
                />
                <div className="flex flex-col m-auto mt-2 w-3/4 font-['Quicksand'] items-start">
                  <div className="text-left text-[24px] font-[Helvetica] font-bold leading-[35px] whitespace-nowrap max-md:leading-[18px] max-md:text-[18px]">
                    John Doe
                  </div>
                  <div className="text-left text-[16px] mt-[8px] opacity-50 leading-[20px] max-md:text-[10px] max-md:leading-[10px]">
                    Marketing Director, XYZ Company
                  </div>
                </div>
              </div>
            </div>
            <div className="border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.1)] flex flex-col justify-between w-[401px] h-[246px] max-md:w-[350px] max-md:h-[220px] max-lg:w-[700px] max-lg:h-[300px] items-start pl-8 py-4 border rounded-lg">
              <img
                src="https://file.rendit.io/n/EeCngqn2hnRjy7VWz8sy.svg"
                alt="Logo1"
                id="Logo1"
                className="ml-[70%] w-20"
              />
              <div className="text-[18px] leading-[28px] ">
                Viralocity helped us reach a wider audience and increase brand
                awareness.
              </div>
              <div className="flex gap-3  w-2/3 items-start">
                <img
                  src="https://file.rendit.io/n/lJCWXljEYRW1EuB11It7.png"
                  alt="Ellipse1"
                  id="Ellipse1"
                  className="w-20 max-md:w-[50px]"
                />
                <div className="flex flex-col mt-2 w-3/5 font-['Quicksand'] items-start">
                  <div className="text-left text-[24px] font-[Helvetica] font-bold leading-[25px] whitespace-nowrap max-md:leading-[18px] max-md:text-[18px]">
                    Jane Smith
                  </div>
                  <div className="text-left text-[16px] opacity-50 mt-[8px] leading-[20px] max-md:text-[10px] max-md:leading-[10px]">
                    CEO, ABC Corporation
                  </div>
                </div>
              </div>
            </div>
            <div className="border-solid border-[#7bc8c0] bg-[rgba(123,_200,_192,_0.1)] flex flex-col justify-between w-[401px] h-[246px] font-['Quicksand'] max-lg:w-[700px] max-md:w-[350px] max-md:h-[220px] max-lg:h-[300px] items-start pl-8 py-4 border rounded-lg">
              <img
                src="https://file.rendit.io/n/EeCngqn2hnRjy7VWz8sy.svg"
                alt="Logo2"
                id="Logo2"
                className="ml-[70%] w-20"
              />
              <div className="text-[18px] leading-[28px] w-full">
                Working with Viralocity has been a fantastic experience.
              </div>
              <div className="flex gap-3  w-2/3 items-start">
                <img
                  src="https://file.rendit.io/n/QObTpr4mO2UEQcTKbPno.png"
                  alt="Ellipse2"
                  id="Ellipse2"
                  className="w-20 max-md:w-[50px]"
                />
                <div className="flex flex-col mt-2 w-3/5 font-['Quicksand'] items-start">
                  <div className="text-left text-[24px] font-[Helvetica] font-bold leading-[25px] max-md:leading-[18px] max-md:text-[18px]">
                    David Johnson
                  </div>
                  <div className="text-left text-[16px] opacity-50 leading-[20px] mt-[8px] max-md:text-[10px] max-md:leading-[10px] whitespace-nowrap">
                    Founder, 123 Startup
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] m-auto text-center py-10">
        <div className="leading-[56px] text-3xl lg:text-[46px] font-[700] font-[Helvetica] ">
          Trusted By Top Global Brands For <br /> Influencer Marketing
        </div>
        
        {/* <div className="max-w-[2000px] m-auto mt-[200px] py-[100px] ">
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
        </div> */}
      </div>
      <div className="slider-brands py-10 w-full">
        <Sliderbrands/>
        </div>

      <div className="max-w-[1400px] pt-24  m-auto">
        <div className="flex flex-col gap-16 w-full m-auto font-['Gilroy-Light'] items-center">
          <div className="flex flex-col justify-center gap-3 w-1/2 items-center">
            <div
              id="Subheading"
              className="text-2xl font-bold leading-[25px] text-[#7bc8c0] text-center"
            >
              Connect
            </div>
            <div
              id="Heading"
              className="text-center lg:text-[46px] font-[700] font-[Helvetica] leading-[56px] text-[#232323] py-[30px]  max-md:text-justify max-md:text-3xl "
            >
              Streamline Your Influencer <br /> Collaboration Process
            </div>
          </div>
          <div className="flex gap-8 justify-between w-[80%] items-center max-md:flex-col">
            <div className="border-solid border-[#7bc8c0] bg-[rgba(104,_193,_184,_0.1)] flex flex-col justify-center gap-1 w-[330px] h-[230px] max-md:w-[350px] max-md:h-[220px] items-start p-[20px] border-2 rounded-lg">
              <div className="text-center text-5xl font-bold leading-[56px] text-[#7bc8c0] ml-1 max-lg:text-3xl">
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
            <div className="border-solid border-[#7bc8c0] bg-[rgba(104,_193,_184,_0.1)] flex flex-col justify-center gap-1 w-[330px] h-[230px] max-md:w-[350px] max-md:h-[220px] items-start p-[20px] border-2 rounded-lg">
              <div className="text-center text-5xl font-bold leading-[56px] text-[#7bc8c0] ml-1 max-lg:text-3xl">
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
            <div className="border-solid border-[#7bc8c0] bg-[rgba(104,_193,_184,_0.1)] flex flex-col justify-center gap-1 w-[330px] h-[230px] max-md:w-[350px] max-md:h-[220px] font-['Gilroy'] items-start  p-[20px] border-2 rounded-lg">
              <div className="text-center text-5xl font-bold leading-[56px] text-[#7bc8c0] ml-2 max-lg:text-3xl">
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
            <div className="border-solid border-[#7bc8c0] bg-[rgba(104,_193,_184,_0.1)] flex flex-col justify-center gap-1 w-[330px] h-[230px] max-md:w-[350px] max-md:h-[220px] font-['Gilroy'] items-start p-[20px] border-2 rounded-lg">
              <div className="text-center text-5xl font-bold leading-[56px] text-[#7bc8c0] max-lg:text-3xl">
                04
              </div>
              <div className="text-center text-2xl font-bold leading-[34px] text-[#232323]">
                Grow
              </div>
              <div
                id="Text4"
                className="font-['Quicksand'] leading-[28px] text-[#232323] w-full"
              >
                Grow your brands reach and engage with your target audience.
              </div>
            </div>
          </div>
        </div>
      </div>




      <div>
       <PowerOfViralocity/>
      </div>

      <Faqs/>

      <div>
        <Footer/>
      </div>
    </main>
  );
};

export default Index;
