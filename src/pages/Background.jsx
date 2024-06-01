import React from "react";
import Navbar from "../components/Navbar";
import { HeroHeading } from "../components/HeroHeading";
import { FaArrowDown } from "react-icons/fa";
 
export function Background() {
  return (
    <div className="z-0 min-h-screen w-full bg-slate-900 bg-dot-thick-white/[0.4] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Navbar />
      <HeroHeading />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FaArrowDown className="text-white text-3xl md:text-4xl lg:text-5xl animate-bounce" />
      </div>
    </div>
  );
}