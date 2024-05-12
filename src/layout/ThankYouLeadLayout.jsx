import React from 'react'
import ThankYouPageLead from '../pages/ThankYouPageLead'
import NavbarBlogs from '../components/blog-components/NavbarBlogs'
import Footer from '../pages/Footer'

const ThankYouLeadLayout = () => {
  return (
    <div className='z-0 bg-[#152238] text-white'>
    <div className='pb-32'>
        <NavbarBlogs />
    </div>
    <ThankYouPageLead />
    <Footer />
    </div>
  )
}

export default ThankYouLeadLayout