import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="hero-section relative  flex flex-col max-w-6xl mx-auto min-h-[45vh] md:min-h-[35vh] justify-center  ">
        <div className="flex flex-col  items-center gap-2">
          <h1 className="font-bold text-xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl px-2 text-center">
            Unlock Your <span className="text-blue-primary">Engineering </span>
            Potential
          </h1>
          <p className="mx-auto max-w-[800px] px-2 text-gray-500 text-xs  sm:text-sm md:text-xl text-center">
            Access notes, video tutorials, question papers, and study materials
            in one place.
          </p>
          <Link href={"/course"}>
            <Button
              className="text-white bg-blue-primary dark:hover:bg-white hover:bg-black dark:hover:text-black transition-colors"
              size="lg"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
        <div className="dark:block glowing-gradient absolute z-[-100]  lg:w-screen w-72 lg:h-screen h-72 bg-blue-primary rounded-full opacity-20 blur-[300px] dark:opacity-[0.1]"></div>
      </section>
    </>
  );
};

export default Hero;
