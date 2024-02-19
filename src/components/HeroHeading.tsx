"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { Button } from "./moving-border";
import { Link } from "react-router-dom";
export function HeroHeading() {
  const words = [
    {
      text: "More",
    },
    {
      text: "Growth.",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "More",
    },
    {
      text: "Turnover.",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "More",
      },
      {
        text: "Clients.",
        className: "text-blue-500 dark:text-blue-500",
      },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-auto relative z-20  ">
      <p className="text-neutral-200 text-xs sm:text-base md:text-lg  ">
        Do what you do best, we'll handle the marketing.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="#about">
        <Button  borderRadius="1.75rem"  className="bg-black/20 text-white hover:bg-black border-slate-800">
          Learn More
        </Button>
        </a>
        <a href="#contact">
        <Button borderRadius="1.75rem"
        className="bg-black/20 text-white hover:bg-black border-slate-800" >
          Yes, I want that!
        </Button>
        </a>
        
      </div>
    </div>
  );
}