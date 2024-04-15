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
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center" >
      <Navbar />
      <Boxes />
      <HeroHeading />
      </div>
      </div>
    </>
  )
}

export default Hero