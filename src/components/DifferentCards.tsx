import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
 
export function DifferentCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "GUARANTEED",
    description:
      "We only win if you win. That's the basis for a good partnership.",
    description2: "You won't carry all the risk, we'll share it.",
    link: "https://youtu.be/dQw4w9WgXcQ",
  },
  {
    title: "RESULTS",
    description:
      "Our first priority is to get you results.",
      description2: "Less talk, more walk.",
    link: "https://youtu.be/dQw4w9WgXcQ",
  },
  {
    title: "REACHABLE",
    description:
      "We're not tucked away in some anonymous call center.",
    description2: "We're a local company, so you'll be able to reach us when you need us.",
    link: "https://youtu.be/dQw4w9WgXcQ",
  },
  {
    title: "SPECIALIZED",
    description:
      "Jack of all trades... master of none.",
    description2: "Specialization works that's why we work with industries we know, so we can guarantee results.",
    link: "https://youtu.be/dQw4w9WgXcQ",
  },
];