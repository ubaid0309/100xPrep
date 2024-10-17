/*
  Warnings:

  - Changed the type of `name` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `isNoteComplete` to the `Notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isNotesAvailable` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "isNoteComplete" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "isNotesAvailable" BOOLEAN NOT NULL;

-- DropEnum
DROP TYPE "CourseName";
