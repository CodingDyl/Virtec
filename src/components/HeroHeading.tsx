import React from "react";
import { Button, Group } from "@mantine/core";
import { styles } from "../styles";
import { Highlight } from "./ui/HeroHighlight";
import { Link } from "react-router-dom";

export function HeroHeading() {
  return (
    <>
    <div className="flex flex-col items-center justify-center relative z-5 mx-auto ">
      <p className="hidden md:block text-neutral-200 text-md md:text-2xl mb-5  ">
        Do what you do best, we'll handle the marketing.
      </p>
      {/* <TypewriterEffectSmooth words={words} /> */}
      <div className="mb-5 px-10 flex flex-col justify-center items-center text-center gap-2">
        <h1 className={`${styles.heroHeadText} text-white text-center`}>
          More Growth. More Clients.
        </h1>
        <h1 className={`${styles.heroHeadText} text-white text-center`}><Highlight>Guaranteed.</Highlight></h1>
      </div>
      <Group grow align="center" gap="md" className="w-full md:w-[70%] flex-col md:flex-row">
        <a href="#about">
        <Button  size="xl" fullWidth
        className={styles.virtecBtn}>
          Learn More
        </Button>
        </a>
        <Link to="/contact">
        <Button size="xl" fullWidth
        className={styles.virtecBtn} >
          Yes, I Want That!
        </Button>
        </Link>
        
      </Group>
    </div>
    </>
  );
}