/*
  Warnings:

  - You are about to alter the column `id` on the `User` table. The data in that column will be cast from `Int` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - Changed the type of `B` on the `_PetOwners` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_PetOwners" DROP CONSTRAINT "_PetOwners_B_fkey";

-- AlterTable
ALTER TABLE "_PetOwners" DROP COLUMN "B";
ALTER TABLE "_PetOwners" ADD COLUMN     "B" STRING NOT NULL;

-- RedefineTables
CREATE TABLE "_prisma_new_User" (
    "id" STRING NOT NULL,
    "username" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,
    "role" INT4 NOT NULL DEFAULT 0,
    "linkedUserId" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
DROP INDEX "User_email_key";
INSERT INTO "_prisma_new_User" ("email","id","linkedUserId","password","role","username") SELECT "email","id","linkedUserId","password","role","username" FROM "User";
DROP TABLE "User" CASCADE;
ALTER TABLE "_prisma_new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
ALTER TABLE "User" ADD CONSTRAINT "User_linkedUserId_fkey" FOREIGN KEY ("linkedUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateIndex
CREATE UNIQUE INDEX "_PetOwners_AB_unique" ON "_PetOwners"("A", "B");

-- CreateIndex
CREATE INDEX "_PetOwners_B_index" ON "_PetOwners"("B");

-- AddForeignKey
ALTER TABLE "_PetOwners" ADD CONSTRAINT "_PetOwners_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
