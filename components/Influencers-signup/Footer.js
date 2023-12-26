import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <footer className="max-w-[1800px]  m-auto flex items-center justify-center py-[40px] border-b-[4px] border-solid border-[#F3F3F3]">
        {/* Footer Child */}
        <div className="w-[90%]   flex items-center justify-around flex-col gap-9">
          {/* Icon And Heading Div */}
          <div className="text-[22px] text-center font-bold leading-[60px] flex gap-3 items-center">
            <div className=" rounded-full bg-[#68C1B8] h-7 w-7"></div>
            <div className="text-[22px] font-['Gilroy-Bold-☞'] leading-[33px]">
              Viralocity
            </div>
          </div>
          {/* //Icon And Heading Div */}
          {/* Bottom NavBar */}
          <div
            id="bottombar"
            className="bottom max-md:flex-col text-black flex list-none md:justify-between items-center xl:!gap-8 lg:!gap-8  text-[16px] font-[600] whitespace-nowrap flex-wrap"
          >
            <li>
              <div
                className="font-[Quicksand] no-underline text-black"
                href="#"
              >
                About Us
              </div>
            </li>
            <li>
              <div
                className="font-[Quicksand] no-underline text-black"
                href="#"
              >
                Contact Us Us
              </div>
            </li>
            <li>
              <div
                className="font-[Quicksand] no-underline text-black"
                href="#"
              >
                FAQs
              </div>
            </li>
            <li>
              <div
                className="font-[Quicksand] no-underline text-black"
                href="#"
              >
                Support
              </div>
            </li>
            <li>
              <div
                className="font-[Quicksand] no-underline text-black"
                href="#"
              >
                Blogs
              </div>
            </li>
          </div>
          {/* //Bottom NavBar */}
          {/* Bottom Icons */}
          <div className="flex list-none gap-9 ">
            <li className="w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] border border-solid border-black rounded-[50%] flex items-center justify-center">
              <a className="cursor-pointer" href="#">
                <FaFacebook
                  className="max-md:text-[20px] text-[black]"
                  fontSize={28}
                />
              </a>
            </li>
            <li className="w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] border border-solid border-black rounded-[50%] flex items-center justify-center">
              <a className="cursor-pointer" href="#">
                <FaTwitter
                  className="max-md:text-[20px] text-[black]"
                  fontSize={28}
                />
              </a>
            </li>
            <li className="w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] border border-solid border-black rounded-[50%] flex items-center justify-center">
              <a className="cursor-pointer" href="#">
                <RiInstagramFill
                  className="max-md:text-[20px] text-[black]"
                  fontSize={28}
                />
              </a>
            </li>
            <li className="w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] border border-solid border-black rounded-[50%] flex items-center justify-center">
              <a className="cursor-pointer" href="#">
                <FaPinterest
                  className="max-md:text-[20px] text-[black]"
                  fontSize={28}
                />
              </a>
            </li>
          </div>
          {/* //Bottom Icons */}
        </div>
      </footer>
      {/* //Footer */}

      {/* Privacy Policy Text */}
      <div className="max-w-[1800px] pb-[2%] pt-[2%] m-auto flex  justify-center">
        <div className="w-[80%]  flex justify-between max-md:flex-col max max-md:items-center">
          <div className="text-[18px] max-md:text-[10px] font-[Quicksand]">
            <p>© 2023 Love Yourself. All rights reserved.</p>
          </div>
          <div className="text-[18px] max-md:text-[10px] font-[Quicksand]">
            <p>Privacy Policy Terms of Service Cookies Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
