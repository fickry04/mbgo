/*
  Warnings:

  - Made the column `price` on table `PropertyTemplate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rentBase` on table `PropertyTemplate` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "PropertyGroup" AS ENUM ('BROWN', 'LIGHT_BLUE', 'PINK', 'ORANGE', 'RED', 'YELLOW', 'GREEN', 'DARK_BLUE');

-- AlterTable
ALTER TABLE "PropertyTemplate" ADD COLUMN     "boardIndex" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "country" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "hotelPrice" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "housePrice" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "landmark" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "mortgageValue" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "propertyGroup" "PropertyGroup" NOT NULL DEFAULT 'BROWN',
ADD COLUMN     "propertySet" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "rent1House" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "rent2Houses" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "rent3Houses" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "rent4Houses" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "rentHotel" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "rentBase" SET NOT NULL,
ALTER COLUMN "rentBase" SET DEFAULT 0;

-- CreateIndex
CREATE INDEX "PropertyTemplate_propertyGroup_propertySet_boardIndex_idx" ON "PropertyTemplate"("propertyGroup", "propertySet", "boardIndex");
