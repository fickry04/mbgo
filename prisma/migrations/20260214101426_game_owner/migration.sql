-- DropIndex
DROP INDEX "Game_status_createdAt_idx";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "ownerUserId" UUID;

-- CreateIndex
CREATE INDEX "Game_ownerUserId_status_createdAt_idx" ON "Game"("ownerUserId", "status", "createdAt");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_ownerUserId_fkey" FOREIGN KEY ("ownerUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
