import Image from 'next/image'
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function ThreeDCardDemo({title, content, image}) {
  return (
    <CardContainer className="inter-var z-40">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black/20 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {content}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
          src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
