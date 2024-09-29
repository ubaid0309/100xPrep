import { popularCourses } from "@/constants";
import React from "react";
import { Card } from "./ui/card";

const PopularCourses = () => {
  return (
    <>
      <section className="popular-courses-section bg-[#EEEEEF] w-screen text-black dark:bg-gray-900 dark:text-white ">
        <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="text-center">
            <h2 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-4  mb-8">
              Popular <span className="text-blue-primary">Courses</span>
            </h2>

            <p className="mt-4 text-slate-500 dark:text-slate-600">
              Explore most popular courses, designed to provide essential
              knowledge and skills in high-demand fields
            </p>
          </div>

          <div className="mt-8 w-full grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3 md:gap-12 xl:grid-cols-4 ">
            {popularCourses.map((course) => {
              return (
                <Card
                  key={course.id}
                  className=" flex items-start gap-4 p-4 border-none shadow-md dark:bg-gray-950 min-h-[150px] cursor-pointer transition-transform hover:scale-105"
                >
                  <span className="shrink-0 rounded-lg text-blue-primary bg-[#EEEEEF] dark:bg-gray-800 p-4">
                    <svg
                      className="size-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-bold">{course.name}</h2>

                    <p className="mt-1 font-light text-sm text-slate-500 dark:text-slate-600">
                      {course.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCourses;
