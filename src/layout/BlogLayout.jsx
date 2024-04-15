import React from 'react'
import Blog from '../pages/blog-pages/Blog'
import Footer from '../pages/Footer'
import NavbarBlogs from '../components/blog-components/NavbarBlogs'

const BlogLayout = () => {
  return (
    <div className="z-0 bg-[#152238] text-white min-h-screen">\
        <NavbarBlogs />
        <Blog />
        <Footer />
    </div>
  )
}

export default BlogLayout