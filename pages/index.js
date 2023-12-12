import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div className="continer-fluid">
      <Header />
      <Hero/>
      <Landing />
      
    </div>
  );
}
