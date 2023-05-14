-- CreateTable
CREATE TABLE "User" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,
    "role" INT4 NOT NULL DEFAULT 0,
    "linkedUserId" INT4,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "species" STRING NOT NULL,
    "breed" STRING,
    "age" INT4,
    "description" STRING,
    "wearingId" INT4,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accessory" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "description" STRING,
    "asset" STRING NOT NULL,

    CONSTRAINT "Accessory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PetOwners" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateTable
CREATE TABLE "_PetAccessories" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PetOwners_AB_unique" ON "_PetOwners"("A", "B");

-- CreateIndex
CREATE INDEX "_PetOwners_B_index" ON "_PetOwners"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PetAccessories_AB_unique" ON "_PetAccessories"("A", "B");

-- CreateIndex
CREATE INDEX "_PetAccessories_B_index" ON "_PetAccessories"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_linkedUserId_fkey" FOREIGN KEY ("linkedUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_wearingId_fkey" FOREIGN KEY ("wearingId") REFERENCES "Accessory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PetOwners" ADD CONSTRAINT "_PetOwners_A_fkey" FOREIGN KEY ("A") REFERENCES "Pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PetOwners" ADD CONSTRAINT "_PetOwners_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PetAccessories" ADD CONSTRAINT "_PetAccessories_A_fkey" FOREIGN KEY ("A") REFERENCES "Accessory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PetAccessories" ADD CONSTRAINT "_PetAccessories_B_fkey" FOREIGN KEY ("B") REFERENCES "Pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
