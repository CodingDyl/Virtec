import React, {useState, useEffect} from 'react'
import { client } from '../../sanity/lib/client'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import Loading from './Loading'
import { urlForImage } from '../../sanity/lib/image'
import { Button } from '../components/moving-border'
import { MdArrowBack } from 'react-icons/md'

const FullBlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "post" && slug.current == $slug][0]{
                    title,
                    body,
                    mainImage,
                    publishedAt,
                    author->{
                        name,
                        image
                    }
                }`,
                { slug }
            )
            .then((data) => {
                // Set a timeout to delay hiding the loading screen
            const loadingDuration = 2000; // Duration in milliseconds (e.g., 2 seconds)
            const timeoutId = setTimeout(() => {
                setPost(data);
                setShowLoading(false);
            }, loadingDuration);

            // Clear the timeout if the component unmounts before the timeout completes
            return () => clearTimeout(timeoutId);
            })
            .catch((error) => console.error("Error fetching post:", error))
    }, [slug]);

    if (!post && showLoading) {
        return <Loading />;
    }

  return (
    <div className='h-full w-full bg-slate-900'>
        <div className="p-6 max-w-4xl mx-auto bg-white">
      <div className='p-2'>
        <Link to="/blog" className='hover:cursor-pointer'>
       <MdArrowBack size={48}
    strokeWidth={2}
    color={'black'} />
    </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-white-500 mb-4">Published on: {new Date(post.publishedAt).toDateString()}</p>

      {post.mainImage && (
        <img
          src={urlForImage(post.mainImage)}
          alt={post.title}
          className="w-full mb-4"
        />
      )}

      <PortableText value={post.body} />

      <div className="mt-6 text-white-600 flex flex-col justify-start gap-4">
        <p>Written by:</p>
         <div className='flex flex-row justify-start gap-4 items-center p-4 bg-[rgba(0,0,0,0.4)] rounded-xl w-[25%]'>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
            alt="DP"
            className="w-10 h-10 rounded-full mt-2"
          />
          <h4 className='text-white'>Dylan Petzer</h4>
          </div>
      </div>
    </div>
    </div>
  )
}

export default FullBlogPost