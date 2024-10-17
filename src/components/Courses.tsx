import { School, GraduationCap } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import Link from "next/link";
import { getCourses } from "@/lib/actions";

const Courses = async () => {
  const courses = await getCourses();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => {
          return (
            <CourseCard
              key={course?.id}
              title={course?.name}
              description={
                course?.name === "Diploma"
                  ? "Explore various branches in engineering tailored to your diploma course."
                  : "Discover comprehensive degree programs in various  disciplines."
              }
              icon={
                course?.name === "Diploma" ? (
                  <School className="h-12 w-12 mb-4 text-blue-primary" />
                ) : (
                  <GraduationCap className="h-12 w-12 mb-4 text-blue-primary" />
                )
              }
              href={`/course/${course?.name.toLowerCase()}`}
              buttonText={`Explore ${course?.name}`}
            />
          );
        })}
      </div>
    </>
  );
};

function CourseCard({ title, description, icon, href, buttonText }) {
  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-lg cursor-pointer">
      <CardHeader>
        <div className="flex justify-center">{icon}</div>
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto flex justify-center">
        <Button
          asChild
          size="lg"
          className="text-white bg-blue-primary dark:hover:bg-white hover:bg-black dark:hover:text-black transition-colors"
        >
          <Link href={href}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
export default Courses;
