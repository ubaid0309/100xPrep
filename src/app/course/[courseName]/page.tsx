import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  BookOpen,
  Code,
  HardHat,
  Cpu,
  Zap,
  Flask,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  GraduationCap,
  School,
} from "lucide-react";
import { getCourseData } from "@/lib/actions";

const courses = {
  diploma: [
    {
      name: "Computer Engineering",
      description:
        "Learn about software development, networking, and computer systems.",
      icon: Code,
    },
    {
      name: "Civil Engineering",
      description:
        "Study structural design, construction, and infrastructure development.",
      icon: HardHat,
    },
    {
      name: "Mechanical Engineering",
      description:
        "Explore mechanics, thermodynamics, and manufacturing processes.",
      icon: Cpu,
    },
    {
      name: "Electrical Engineering",
      description:
        "Dive into electrical systems, power distribution, and control systems.",
      icon: Zap,
    },
    {
      name: "Chemical Engineering",
      description:
        "Study chemical processes, reactions, and industrial applications.",
      icon: Flask,
    },
  ],
  degree: [
    {
      name: "Computer Science",
      description:
        "In-depth study of algorithms, software engineering, and artificial intelligence.",
      icon: Code,
    },
    {
      name: "Civil Engineering",
      description:
        "Advanced concepts in structural engineering, geotechnics, and urban planning.",
      icon: HardHat,
    },
    {
      name: "Mechanical Engineering",
      description:
        "Comprehensive study of mechanics, robotics, and advanced manufacturing.",
      icon: Cpu,
    },
    {
      name: "Electrical Engineering",
      description:
        "Advanced topics in electronics, signal processing, and communication systems.",
      icon: Zap,
    },
    {
      name: "Chemical Engineering",
      description:
        "Advanced study of chemical processes, biotechnology, and materials science.",
      icon: Flask,
    },
  ],
};

export default async function CoursePage({
  params,
}: {
  params: { courseName: string };
}) {
  const { courseName } = params;

  const courseData = await getCourseData(courseName);
  if (!courseData)
    return (
      <>
        <div>Loading</div>
      </>
    );
  const title =
    courseName === "diploma"
      ? "Diploma Courses"
      : "Bachelor of Engineering Courses";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className=" py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="md:text-4xl font-bold text-center mb-4 text-xl">
              {title}
            </h1>
            <p className="text-sm text-gray-500 md:text-xl text-center  mb-12">
              Explore our range of {courseName} courses and find the perfect fit
              for your engineering journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseData.map((course, index) => (
                <BranchCard key={index} {...course.branches[0]} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BranchCard({ name, id, courseId }) {
  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-lg  scale">
      <CardHeader>
        <div className="flex justify-center">
          {courseId === "diploma" ? (
            <School className="h-12 w-12 mb-4 text-blue-primary" />
          ) : (
            <GraduationCap className="h-12 w-12 mb-4 text-blue-primary" />
          )}{" "}
        </div>
        <CardTitle className="text-2xl font-bold text-center">{name}</CardTitle>
      </CardHeader>

      <CardFooter className="mt-auto flex justify-center">
        <Button
          asChild
          size="lg"
          className="text-white bg-blue-primary dark:hover:bg-white hover:bg-black dark:hover:text-black transition-colors"
        >
          <Link href={`/course/${courseId}/${id}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
