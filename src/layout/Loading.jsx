import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { Link } from 'react-router-dom';

const Loading = () => {
  return (
    <div className='min-h-screen w-full bg-slate-900'>
        <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <strong>Loading...</strong> <br /> Can't wait for you to read this!
      </motion.h1 >
    </LampContainer>
    </div>
  )
}

export default Loading