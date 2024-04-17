import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { client } from "../../../sanity/lib/client";
import { BlogCard } from "./BlogCard";


export function BlogPost() {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Query for blog posts
        client
            .fetch(`*[_type == "post"]{title, slug, publishedAt, body, description, mainImage}`)
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error('Error fetching blog posts:', error);
            });
    }, []);

  return (
    <div className="grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto mb-10">
      {posts.map((post) => (
        <BlogCard
          post={post}
          key={post.slug.current}
        />
      ))}
    </div>
  );
}


