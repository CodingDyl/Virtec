import React from 'react'
import Main from '../pages/Main'
import Content from '../pages/Content'
import Footer from '../pages/Footer'
import { Contact } from '../pages/Contact'
import { Background } from '../pages/Background'

const MainLayout = () => {
  return (
    <div className="z-0 bg-[#152238] text-white">
            <Background />
            <Main />
            <Content />
            <Contact />
            <Footer />
    </div>
  )
}

export default MainLayout