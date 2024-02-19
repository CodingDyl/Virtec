"use-client";
import React from "react";
import { TracingBeam } from "../components/tracingbeam";
import { problems } from "../constants";
import { ThreeDCardDemo } from "../components/3DCard";

const Main = () => {
  return (
    <div className="py-4 px-10 min-h-screen w-[100%]">
      <TracingBeam>
          <div className="mt-10 w-full flex flex-col justify-center items-center">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold py-10">
              So How Do You Optimize Your Marketing?
            </h1>
            <div className="flex flex-col text-start gap-0">
              {problems.map((problem, index) => (
                <ThreeDCardDemo
                  key={problem.title}
                  index={index}
                  {...problem}
                />
              ))}
            </div>
          </div>
      </TracingBeam>
    </div>
  );
};

export default Main;
