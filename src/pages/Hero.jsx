"use-client"
import React from 'react'
import { Boxes } from '../components/background-boxes'
import { cn } from '../utils/cn'
import { TypewriterEffectSmooth } from '../components/typewriter-effect'
import { HeroHeading } from '../components/HeroHeading'
import Navbar from '../components/Navbar'

export function TypewriterEffectSmoothDemo() {
    const words = [
      {
        text: "Build",
      },
      {
        text: "awesome",
      },
      {
        text: "apps",
      },
      {
        text: "with",
      },
      {
        text: "Aceternity.",
        className: "text-blue-500 dark:text-blue-500",
      },
    ];
}

const Hero = () => {
  return (
    <>
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Navbar />
      <Boxes />
      <HeroHeading />
      </div>
    </>
  )
}

export default Hero