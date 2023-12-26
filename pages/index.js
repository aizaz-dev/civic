import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div className="continer-fluid">
      <Header
        bg={"bg-[#68c1b8]"}
        textOff={"!text-[#fff]"}
        title={"!text-[#fff]"}
        signupBg={"!bg-[#fff]"}
        signupText={"!text=[#68c1b8]"}
      />
      <Hero />
      <Landing />
    </div>
  );
}
