import Image from "next/image";

const Hero = () => {
  return (
    <div className="inline-flex items-center justify-between relative bg-[#68c1b8] w-full lg:px-20">
      <div className="gap-[34px] px-8 md:px-8 lg:px-0  inline-flex flex-col items-start justify-center relative lg:mt-16 lg:mb-16 md:mt-12 md:mb-12 sm:pt-8 sm:pb-8 pt-8 pb-8">
        <div className="gap-[6px] inline-flex flex-col items-start justify-center relative ">
          <p className="w-full lg:w-[544px] mt-[-1.00px] [font-family:'Gilroy-Bold-☞',Helvetica] text-white text-[34px] md:text-[44px] lg:text-[66px] relative font-normal tracking-[0]">
            Connect With Influencers And Grow Your Brand
          </p>
          <p className="w-full lg:w-[540px] [font-family:'Quicksand',Helvetica] text-white text-[16px] leading-[24px] relative font-normal tracking-[0]">
            Welcome to viralocity, the marketplace that connects influencers
            with brands. With our platform, influencers can easily post ads on
            their social media channels, while brands gain valuable insights
            from each campaign. Schedule recurring campaigns and reach your
            target audience like never before.
          </p>
        </div>
        <div className="inline-flex items-center gap-[21px] relative flex-[0_0_auto]">
          <div className="px-[20px] py-[10px] bg-white inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto] rounded-[24px]">
            <div className="w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] text-[#68c1b8] text-[16px] leading-[24px] whitespace-nowrap relative font-normal tracking-[0]">
              Learn More
            </div>
          </div>
          <div className="px-[32px] py-[10px] border border-solid border-white inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto] rounded-[24px]">
            <div className="w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] text-white text-[16px] leading-[24px] whitespace-nowrap relative font-normal tracking-[0]">
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] justify-center hidden lg:flex">
        <Image
          className="ml-auto mr-auto"
          alt="hero"
          style={{ width: "100%", height: "100%" }}
          width={600}
          height={800}
          src="/hero.png"
        />
      </div>
    </div>
  );
};

export default Hero;
