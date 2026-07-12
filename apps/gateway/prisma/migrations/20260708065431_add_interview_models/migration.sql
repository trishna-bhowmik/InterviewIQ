/*
  Warnings:

  - Added the required column `questions` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resumeId` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Interview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Interview" ADD COLUMN     "feedback" TEXT,
ADD COLUMN     "questions" JSONB NOT NULL,
ADD COLUMN     "resumeId" TEXT NOT NULL,
ADD COLUMN     "score" DOUBLE PRECISION,
ADD COLUMN     "status" "InterviewStatus" NOT NULL DEFAULT 'SCHEDULED',
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "interviewId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "score" DOUBLE PRECISION,
    "feedback" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
