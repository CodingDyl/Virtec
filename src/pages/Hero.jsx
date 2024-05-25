import React from 'react'
import { Boxes } from '../components/background-boxes'
import { HeroHeading } from '../components/HeroHeading'
import Navbar from '../components/Navbar'

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