/*
  Warnings:

  - Added the required column `type` to the `Prompt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "type" "ProjectType" NOT NULL DEFAULT 'NEXTJS';

-- AlterTable
ALTER TABLE "Prompt" ADD COLUMN     "type" "PromptType" NOT NULL;
