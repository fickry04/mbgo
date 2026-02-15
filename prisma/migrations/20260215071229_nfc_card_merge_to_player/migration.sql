/*
  Warnings:

  - You are about to drop the `NfcCard` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[gameId,nfcCardUid]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nfcCardUid` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "NfcCard" DROP CONSTRAINT "NfcCard_playerId_fkey";

-- DropIndex
DROP INDEX "Player_gameId_seat_key";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "nfcCardUid" TEXT NOT NULL;

-- DropTable
DROP TABLE "NfcCard";

-- CreateIndex
CREATE UNIQUE INDEX "Player_gameId_nfcCardUid_key" ON "Player"("gameId", "nfcCardUid");
