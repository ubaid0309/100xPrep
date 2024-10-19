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
import { getSemester } from "@/lib/actions";

const branchData = {
  diploma: {
    "computer-engineering": {
      title: "Diploma in Computer Engineering",
      semesters: [
        { number: 1, title: "Introduction to Computer Engineering" },
        { number: 2, title: "Programming Fundamentals" },
        { number: 3, title: "Data Structures and Algorithms" },
        { number: 4, title: "Database Management Systems" },
        { number: 5, title: "Web Development" },
        { number: 6, title: "Networking and Security" },
      ],
    },
    // Add other diploma branches here
  },
  degree: {
    "computer-science": {
      title: "Bachelor of Engineering in Computer Science",
      semesters: [
        { number: 1, title: "Foundations of Computer Science" },
        { number: 2, title: "Object-Oriented Programming" },
        { number: 3, title: "Data Structures and Algorithms" },
        { number: 4, title: "Operating Systems" },
        { number: 5, title: "Database Management Systems" },
        { number: 6, title: "Software Engineering" },
        { number: 7, title: "Artificial Intelligence" },
        { number: 8, title: "Advanced Topics in Computer Science" },
      ],
    },
    // Add other degree branches here
  },
};

export default async function BranchPage({
  params,
}: {
  params: { courseName: string; branchName: string };
}) {
  const { courseName, branchName: branch } = params;
  const branchSemesters = await getSemester(courseName, branch);
  if (!branchSemesters) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow">
        <section className=" py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-xl md:text-4xl font-bold text-center mb-4">
              {branchSemesters?.name}
            </h1>
            <p className="text-sm md:text-xl text-center text-gray-500 mb-12">
              Explore the semesters and start your learning journey in{" "}
              {branchSemesters?.name}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branchSemesters.semesters.map((semester) => (
                <SemesterCard
                  key={semester.id}
                  {...semester}
                  courseId={branchSemesters.courseId}
                  branchId={semester.branchId}
                  courseName={branchSemesters.name}
                  subjectsName={[
                    semester.subjects.map((subject) => {
                      return subject.name;
                    }),
                  ]}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SemesterCard({ courseName, subjectsName, branchId, courseId, id }) {
  return (
    <Card className="flex flex-col h-full  shadow-md dark:bg-gray-950 border  cursor-pointer transition-transform hover:scale-105 ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Semester {id.split("-")[1]}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1">
          {subjectsName.map((subject, index) => {
            return (
              <CardDescription key={index}>{`${subject}${
                subjectsName.length > 1 ? " | " : " "
              } `}</CardDescription>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild size="lg" className="w-full primary-button">
          <Link href={`/course/${courseId}/${branchId}/${id}`}>
            View Subjects
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
