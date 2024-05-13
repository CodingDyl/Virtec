import React from "react";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { styles } from "../styles";
export function HeroHeading() {
  // const words = [
  //   {
  //     text: "More",
  //   },
  //   {
  //     text: "Clients.",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  //   {
  //     text: "More",
  //   },
  //   {
  //     text: "Growth.",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  //   {
  //     text: "More",
  //   },
  //   {
  //     text: "Turnover.",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  // ];
  return (
    <>
    <div className="flex flex-col items-center justify-center h-auto relative z-20 mx-auto ">
      <p className="hidden md:block text-neutral-200 text-md sm:text-md md:text-2xl mb-5  ">
        Do what you do best, we'll handle the marketing.
      </p>
      {/* <TypewriterEffectSmooth words={words} /> */}
      <div className="mb-5 px-10">
        <h1 className={`${styles.heroHeadText} text-white text-center`}>
          More <span className="text-blue-500">Growth.</span> More <span className="text-blue-500">Clients.</span> <br /> Guaranteed.
        </h1>
      </div>
      <Group grow align="center" gap="md" className="w-full md:w-[50%] flex-col md:flex-row">
        <a href="#about">
        <Button  size="xl" fullWidth
        className="hidden md:block bg-black text-white border-blue-500 hover:bg-white/5 text-sm md:text-xl hover:translate-y-2 hover:border-white rounded-xl">
          Learn More
        </Button>
        </a>
        <a href="#contact">
        <Button size="xl" fullWidth
        className="bg-black text-white text-wrap border-blue-500 hover:bg-white/5 text-sm md:text-xl hover:translate-y-2 hover:border-white rounded-xl" >
          Yes, I Want That!
        </Button>
        </a>
        
      </Group>
    </div>
    </>
  );
}