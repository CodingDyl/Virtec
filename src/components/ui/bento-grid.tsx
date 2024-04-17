import React from "react";
import { cn } from "../../utils/cn";
import { Button } from "@mantine/core";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto"
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  post
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        post.className
      )}
    >
      <img src={post.mainImage} alt="image" />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {post.title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {post.description}
        </div>
        <Button radius="md" variant="filled" className="my-2 bg-black text-white">Read More...</Button>
      </div>
    </div>
  );
};
