import React from "react";
import { Button, Group } from "@mantine/core";
import { styles } from "../styles";

export function HeroHeading() {
  return (
    <>
    <div className="flex flex-col items-center justify-center relative z-5 mx-auto ">
      <p className="hidden md:block text-neutral-200 text-md md:text-2xl mb-5  ">
        Do what you do best, we'll handle the marketing.
      </p>
      {/* <TypewriterEffectSmooth words={words} /> */}
      <div className="mb-5 px-10">
        <h1 className={`${styles.heroHeadText} text-white text-center`}>
          More <span className="text-blue-500">Growth.</span> More <span className="text-blue-500">Clients.</span> <br /> Guaranteed.
        </h1>
      </div>
      <Group grow align="center" gap="md" className="w-full md:w-[70%] flex-col md:flex-row">
        <a href="#about">
        <Button  size="xl" fullWidth
        className={styles.virtecBtn}>
          Learn More
        </Button>
        </a>
        <a href="#contact">
        <Button size="xl" fullWidth
        className={styles.virtecBtn} >
          Yes, I Want That!
        </Button>
        </a>
        
      </Group>
    </div>
    </>
  );
}