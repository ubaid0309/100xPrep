import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { getSemesterSubjects } from "@/lib/actions";

const semesterData = {
  diploma: {
    "computer-engineering": {
      "semester-1": {
        title: "Semester 1 - Diploma in Computer Engineering",
        subjects: [
          {
            name: "Basic Mathematics",
            description: "Fundamental mathematical concepts for engineering",
          },
          {
            name: "Applied Physics",
            description: "Physics principles applied to engineering contexts",
          },
          {
            name: "Introduction to Programming",
            description: "Basics of computer programming and logic",
          },
          {
            name: "Digital Electronics",
            description: "Fundamentals of digital circuits and systems",
          },
          {
            name: "Communication Skills",
            description: "Effective communication in technical environments",
          },
        ],
      },
      // Add other semesters here
    },
    // Add other diploma branches here
  },
  degree: {
    "computer-science": {
      1: {
        title: "Semester 1 - Bachelor of Engineering in Computer Science",
        subjects: [
          {
            name: "Calculus I",
            description: "Advanced mathematical concepts for computer science",
          },
          {
            name: "Introduction to Computer Science",
            description: "Overview of computer science principles",
          },
          {
            name: "Programming Fundamentals",
            description: "Basic programming concepts and techniques",
          },
          {
            name: "Digital Logic Design",
            description: "Fundamentals of digital systems and logic circuits",
          },
          {
            name: "Technical Writing",
            description: "Effective writing skills for technical documentation",
          },
        ],
      },
      // Add other semesters here
    },
    // Add other degree branches here
  },
};
export default async function SemesterPage({
  params,
}: {
  params: { courseName: string; branchName: string; semester: string };
}) {
  const { courseName, branchName, semester } = params;
  const semesterSubjects = await getSemesterSubjects(
    courseName,
    branchName,
    semester
  );
  if (!semesterSubjects) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className=" py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link
                href={`/course/${courseName}/${branchName}`}
                className="inline-flex items-center text-blue-primary hover:text-blue-800"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to All Semesters
              </Link>
            </div>
            <h1 className="text-xl md:text-4xl font-bold text-center mb-4">
              Semester-{semesterSubjects?.number}
            </h1>
            <p className="text-sm md:text-xl text-center text-gray-600 mb-12">
              Explore the subjects for this semester and start your learning
              journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {semesterSubjects?.subjects.map((subject) => (
                <SubjectCard
                  key={subject?.id}
                  {...subject}
                  courseId={semesterSubjects?.courseId}
                  branchId={semesterSubjects?.branchId}
                  semesterId={semesterSubjects?.id}
                  subjectId={subject?.id}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SubjectCard({
  name,
  courseId,
  branchId,
  semesterId,
  subjectId,
  notes,
}) {
  return (
    <Card className="flex flex-col gap-1 h-full transition-shadow hover:shadow-lg cursor-pointer scale">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="-mt-4">
        <div className="flex flex-col gap-1 ">
          {notes?.map((note) => {
            return (
              <CardDescription key={note?.id} className="text-base">
                {note?.chapterNumber + " : " + note?.chapterName}
              </CardDescription>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild size="lg" className="w-full primary-button">
          <Link
            href={`/course/${courseId}/${branchId}/${semesterId}/basic-mathematics`}
          >
            View Subject Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
