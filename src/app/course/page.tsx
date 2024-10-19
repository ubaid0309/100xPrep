import CourseLoadingSkeleton from "@/components/CourseLoadingSkeleton";
import Courses from "@/components/Courses";

export default async function CoursesPage() {
  return (
    <div className="flex flex-col ">
      <main className="flex-grow">
        <section className=" py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className=" font-bold mb-4 text-xl md:text-4xl ">
              Choose Your Course
            </h1>
            <p className="text-sm md:text-xl font-light text-gray-600 mb-12">
              Select your course to explore the branches and get started on your
              learning journey.
            </p>
            <Courses />
          </div>
        </section>
      </main>
    </div>
  );
}
