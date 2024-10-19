-- AlterTable
ALTER TABLE "Semester" ADD COLUMN     "courseId" TEXT NOT NULL DEFAULT 'diploma';

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
