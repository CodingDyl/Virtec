import React from 'react'
import { styles } from '../../styles'
import { BentoGridBlog } from '../../components/blog-components/BentoGridBlog'

const Blog = () => {
  return (
    <div className='py-5 min-h-screen w-full flex flex-col justify-center items-center'>
        <div className='mt-20 md:mt-10'>
        <p className={`${styles.sectionSubText} text-center`}>Interested in learning more?</p>
          <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-bold py-10">
              Our Blog.
          </h1>
        <BentoGridBlog />
        </div>
    </div>
  )
}

export default Blog