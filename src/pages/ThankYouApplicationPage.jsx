import React from 'react'
import { BlogPost } from '../components/blog-components/BlogPost'

const ThankYouApplicationPage = () => {
  return (
    <>
    <div className="py-10 w-full px-[5%] lg:px-[15%] flex flex-col justify-start items-center mx-auto text-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl md:text-6xl lg:text-7xl text-center font-bold py-10">
            Thank You For Your Application!
          </h1>
        </div>
        <div className="flex flex-col gap-6 w-[80%] mb-10 text-md md:text-2xl">
          <p>
            We have received your request, Dylan will contact you within 24 hours to help you further.
          </p>
          <p>In the meantime, check out our blog posts for more marketing tips and tricks!</p>
        </div>

        {/* Blog Post Tray */}
        <div className='mb-20 md:mb-32'><BlogPost /></div>
        
        </div>
    </>
  )
}

export default ThankYouApplicationPage