"use server";

import { prisma } from "../../../prisma/prisma";

export const getCourses = async () => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        branches: {
          include: {
            semesters: {
              include: {
                subjects: {
                  include: {
                    notes: true,
                    content: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return courses;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getCourseData = async (courseName: string) => {
  const courseData = await prisma.course.findMany({
    where: {
      id: courseName,
    },
    include: {
      branches: {
        include: {
          semesters: {
            include: {
              subjects: {
                include: {
                  notes: true,
                  content: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return courseData;
};

export async function getSemester(courseId: string, branchId: string) {
  const semesters = await prisma.branch.findMany({
    where: {
      id: branchId,
      courseId: courseId,
    },
    include: {
      semesters: {
        include: {
          subjects: true,
        },
      },
    },
  });
  return semesters[0];
}

export async function getSemesterSubjects(
  courseId: string,
  branchId: string,
  semesterId: string
) {
  try {
    const semesterSubjects = await prisma.semester.findMany({
      where: {
        id: semesterId,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
