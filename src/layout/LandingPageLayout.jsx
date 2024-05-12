import React from 'react'
import Footer from '../pages/Footer'
import LandingPage from '../pages/LandingPage'
import NavbarBlogs from '../components/blog-components/NavbarBlogs'

const LandingPageLayout = () => {
  return (
    <div className='z-0 bg-[#152238] text-white'>
    <div className='pb-32'>
        <NavbarBlogs />
    </div>
    <LandingPage />
    <Footer />
    </div>
  )
}

export default LandingPageLayout