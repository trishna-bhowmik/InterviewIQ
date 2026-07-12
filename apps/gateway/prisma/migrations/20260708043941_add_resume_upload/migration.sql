/*
  Warnings:

  - You are about to drop the column `education` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `parsedText` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Resume` table. All the data in the column will be lost.
  - Added the required column `filename` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mimeType` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalName` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Resume" DROP CONSTRAINT "Resume_ownerId_fkey";

-- DropIndex
DROP INDEX "Resume_ownerId_idx";

-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "education",
DROP COLUMN "experience",
DROP COLUMN "fileUrl",
DROP COLUMN "ownerId",
DROP COLUMN "parsedText",
DROP COLUMN "skills",
ADD COLUMN     "extractedText" TEXT,
ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "mimeType" TEXT NOT NULL,
ADD COLUMN     "originalName" TEXT NOT NULL,
ADD COLUMN     "path" TEXT NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
