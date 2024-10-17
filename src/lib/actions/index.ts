"use server";

import { prisma } from "../../../prisma/prisma";

export const getCourses = async () => {
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

export async function getSemester(branchId: string) {
  const semesters = await prisma.branch.findMany({
    where: {
      id: branchId,
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
