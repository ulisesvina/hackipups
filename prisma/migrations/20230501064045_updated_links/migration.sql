/*
  Warnings:

  - You are about to drop the column `linkedUserId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_linkedUserId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "linkedUserId";
ALTER TABLE "User" ADD COLUMN     "linkId" STRING;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
