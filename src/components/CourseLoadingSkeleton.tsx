import React from "react";
import { Skeleton } from "./ui/skeleton";

const CourseLoadingSkeleton = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center  ">
      <div className="container flex flex-col md:flex-row gap-4 justify-between items-center  mx-auto">
        <div className="card flex flex-col gap-1 p-4">
          <Skeleton className="h-[200px] w-[400px] " />
          <Skeleton className="h-4 w-[220px]" />
        </div>
        <div className="card flex flex-col gap-1 ">
          <Skeleton className="h-[200px] w-[400px] " />
          <Skeleton className="h-4 w-[220px]" />
        </div>
      </div>
    </div>
  );
};

export default CourseLoadingSkeleton;
