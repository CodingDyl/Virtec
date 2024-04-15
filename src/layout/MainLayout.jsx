import React from 'react'
import Hero from '../pages/Hero'
import Main from '../pages/Main'
import Content from '../pages/Content'
import Footer from '../pages/Footer'
import { Contact } from '../pages/Contact'

const MainLayout = () => {
  return (
    <div className="z-0 bg-[#152238] text-white">
            <Hero />
            <Main />
            <Content />
            <Contact />
            <Footer />
    </div>
  )
}

export default MainLayout