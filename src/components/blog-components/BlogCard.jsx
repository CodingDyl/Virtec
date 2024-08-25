import { Image } from "@mantine/core";
import { FollowerPointerCard } from "../ui/following-pointer";
import { urlForImage } from "../../../sanity/lib/image";
import { Link } from "react-router-dom";
 
export function BlogCard({post}) {

    const imageUrl = urlForImage(post.mainImage);

    if (!post) {
        return <div className="mx-auto text-3xl text-bold">Posts are coming soon...</div>
    }

  return (
    <Link to={`/blog/${post.slug.current}`}>
    <div className="w-80 h-full mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title="Dylan Petzer"
            avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative" style={{ height: '10rem' }}>
            <Image
              src={imageUrl}
              alt="thumbnail"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
              style={{ height: '100%' }}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700 overflow-hidden text-ellipsis line-clamp-2">
              {post.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500 overflow-hidden text-ellipsis line-clamp-4">
              {post.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{new Date(post.publishedAt).toDateString()}</span>
              <Link to={`/blog/${post.slug.current}`} className="hover:cursor-none"><div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Read More
              </div></Link>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
    </Link>
  );
}

const TitleComponent = ({
    title,
    avatar,
  }) => (
    <div className="flex space-x-2 items-center">
      <Image
        src={avatar}
        h="20"
        w="20"
        fit="cover"
        sizes="sm"
        alt="thumbnail"
        className="rounded-full border-2 border-white"
      />
      <p>{title}</p>
    </div>
  );