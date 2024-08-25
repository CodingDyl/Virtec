import React from 'react'
import { Contact } from '../pages/Contact'
import Footer from '../pages/Footer'
import Navbar from '../components/Navbar'

const ContactLayout = () => {
  return (
    <div className="z-0 bg-[#152238] text-white">
        <Navbar />
        <Contact />
        <Footer />
    </div>
  )
}

export default ContactLayout