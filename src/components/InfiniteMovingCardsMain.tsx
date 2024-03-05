import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving.cards";
 
export function InfiniteMovingCardsMain() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 
const testimonials = [
  {
    quote:
      "Working with this team has been an incredible experience! They truly understand the intricacies of marketing, web design, and SEO. It's like they turned our business into a success story overnight!",
    name: "Emily Johnson",
    title: "CEO, Bright Future Enterprises",
  },
  {
    quote:
      "I never thought I'd find a group that could handle everything from web design to SEO with such finesse. But this team exceeded all my expectations. Our online presence has never been stronger!",
    name: "Michael Patel",
    title: "Founder, TechGenius Solutions",
  },
  {
    quote: "Choosing these professionals was the best decision we made for our business. They transformed our online presence and helped us reach new heights of success!",
    name: "Sarah Thompson",
    title: "Marketing Director, Elite Realty Group",
  },
  {
    quote:
      "This team is a game-changer! Their expertise in marketing, web design, and SEO is unmatched. Our website has never looked better, and our online visibility has skyrocketed!",
    name: "Alex Rodriguez",
    title: "Owner, Fresh Eats Cafe",
  },
  {
    quote:
      "I can't recommend these experts enough! From the moment we started working together, they demonstrated their dedication to our success. Thanks to their efforts, our business has seen incredible growth!",
    name: "Jessica Lee",
    title: "Director of Operations, Stellar Solutions Inc.",
  },
];