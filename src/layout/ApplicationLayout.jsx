import React from 'react'
import NavbarBlogs from '../components/blog-components/NavbarBlogs'
import Footer from '../pages/Footer'
import { BackgroundBeams } from '../components/ui/background-beams'
import ThankYouApplicationPage from '../pages/ThankYouApplicationPage'

const ApplicationLayout = () => {
  return (
    <div className='z-20 min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased text-white'>
    <NavbarBlogs />
    <div className='pt-32 md:pt-20 w-full z-10'><ThankYouApplicationPage /></div>
    <div className='w-full z-10'><Footer/></div>
    <BackgroundBeams />
    </div>
  )
}

export default ApplicationLayout