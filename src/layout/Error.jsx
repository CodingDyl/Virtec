import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';

const Error = () => {
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
        <strong>404 Error:</strong> <br /> Oops... Doesn't look like you on the right page!
      </motion.h1 >
      <motion.div initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }} className='mt-5 md:mt-10'>
      <Link to="/">
      <Button size='xl' fullWidth
        className="bg-black rounded-xl hover:translate-y-[-4px] border-blue-500 text-white flex gap-2 justify-center px-6 hover:border-white hover:bg-white/5">Go Back</Button>
        </Link>
        </motion.div>
    </LampContainer>
    </div>
  )
}

export default Error