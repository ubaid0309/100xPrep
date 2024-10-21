/*
  Warnings:

  - Made the column `courseId` on table `Semester` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_courseId_fkey";

-- AlterTable
ALTER TABLE "Semester" ALTER COLUMN "courseId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
