import React from "react";
import { TracingBeam } from "../components/tracingbeam";
import { problems } from "../constants";
import { ThreeDCardDemo } from "../components/3DCard";
import { styles } from "../styles";

const Main = () => {
  return (
    <>
    <span id='about'>
            &nbsp;  
    </span>
    <div className="py-4 px-10 min-h-screen w-[100%]">
      <div className="flex flex-col justify-center items-center text-center w-full">
            <p className={styles.sectionSubText}>We both know that.</p>
            <h2 className={styles.sectionHeadText}>Marketing is important...</h2>
            <p className="mt-4 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]">...but there are already 101 things on your to-do list. 
And they are all important too!</p>
      </div>
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
    </>
  );
};

export default Main;
