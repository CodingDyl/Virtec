import React from 'react'
import Blog from '../pages/blog-pages/Blog'
import Footer from '../pages/Footer'
import NavbarBlogs from '../components/blog-components/NavbarBlogs'

const BlogLayout = () => {
  return (
    <div className="z-0 bg-[#152238] text-white min-h-screen flex flex-col">      
        <div className='py-10 md:py-5'>
        <NavbarBlogs />
        </div>
        <div className='flex-1 mb-4'>
        <Blog />
        </div>
        <Footer />
    </div>
  )
}

export default BlogLayout