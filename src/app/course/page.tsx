import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="flex flex-col ">
      <main className="flex-grow">
        <section className=" py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Choose Your Course</h1>
            <p className="text-xl font-light text-gray-600 mb-12">
              Select your course to explore the branches and get started on your
              learning journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CourseCard
                title="Diploma"
                description="Explore various branches in engineering tailored to your diploma course."
                icon={<School className="h-12 w-12 mb-4 text-blue-600" />}
                href="/course/diploma"
                buttonText="Explore Diploma"
              />
              <CourseCard
                title="Bachelor of Engineering"
                description="Discover comprehensive degree programs in various engineering disciplines."
                icon={
                  <GraduationCap className="h-12 w-12 mb-4 text-green-600" />
                }
                href="/course/degree"
                buttonText="Explore Degree"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CourseCard({ title, description, icon, href, buttonText }) {
  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-lg">
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
