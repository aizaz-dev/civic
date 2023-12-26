import React, { useState } from "react";
import UseDimmensions from "./UseDimmensions";
import { IoIosArrowUp } from "react-icons/io";
const Data = [
  {
    id: "1",
    title: "How many team members can I invite?",
    content:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: "2",
    title: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "3",
    title: "How do I reset my password?",
    content:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: "4",
    title: "Can I cancel my subscription?",
    content:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: "5",
    title: "Do you provide additional support?",
    content:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];
const Faqs = () => {
  const { width } = UseDimmensions();
  //   const backgroundMobile = {
  //     backgroundImage: `url(${bgMobile.src})`,
  //     backgroundPosition: "top",
  //     backgroundRepeat: "no-repeat",
  //   };
  //   const backgroundDesktop = {
  //     backgroundImage: `url(${bgDesktop.src})`,
  //     backgroundPosition: "left -10rem top 4rem",
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //   };

  const [active, setActive] = useState(null);
  const handleToggle = (index) => {
    active === index ? setActive(null) : setActive(index);
  };
  return (
    <div className="max-w-[1400px] w-full mx-auto lg:px-[60px] px-[20px] lg:mb-[160px] mb-[80px] lg:mt-[160px] mt-[80px] rounded-lg">
      <div className="flex flex-col gap-2 mb-10">
        <div className="text-center lg:text-5xl text-3xl font-['Gilroy'] font-bold lg:leading-[56px]">
          FAQs
        </div>
        <div className="text-center text-lg font-['Quicksand'] leading-[28px] text-[#333333] mt-2">
          Find answers to common questions about our platform and services.
        </div>
      </div>

      <div className="flex flex-col gap-4 relative top-[-1.5rem] mb-[2.5rem] md:top-[6rem] md:mb-0">
        {Data.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                active === index
                  ? "border-solid border-[#7bc8c0] border-1 bg-[rgba(123,_200,_192,_0.1)] py-3 px-5 rounded-lg"
                  : "border-solid border-[#23232373] border-1 py-3 px-5 rounded-lg"
              }
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-center gap-3 my-2">
                  <p
                    className="text-2xl font-['Gilroy-Bold'] leading-[34px] text-[#232323] m-0"
                    onClick={() => handleToggle(index)}
                  >
                    {item.title}
                  </p>

                  <IoIosArrowUp
                    onClick={() => handleToggle(index)}
                    className={
                      active === index
                        ? "cursor-pointer text-[30px] text-[#7bc8c0] transition-all"
                        : "cursor-pointer text-[30px] rotate-180 transition-all"
                    }
                  />
                </div>
              </div>
              <p
                onClick={() => handleToggle(index)}
                className={
                  active === index
                    ? "text-lg font-['Quicksand'] leading-[28px] text-[#333333] w-full transition-all "
                    : " max-h-0 p-0 m-0 transition-all overflow-hidden"
                }
              >
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
