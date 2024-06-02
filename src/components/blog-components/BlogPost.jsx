import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import { BlogCard } from "./BlogCard";
import LoadingSkeleton from "./LoadingSkeleton";


export function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Query for blog posts
        client
            .fetch(`*[_type == "post"]{title, slug, publishedAt, body, description, mainImage}`)
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching blog posts:', error);
            });
    }, []);

    if (loading) {
      return <LoadingSkeleton />
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto mb-10">
      {posts.map((post) => (
        <BlogCard
          post={post}
          key={post.slug.current}
        />
      ))}
    </div>
  );
}


