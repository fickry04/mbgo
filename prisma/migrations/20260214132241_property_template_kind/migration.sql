-- CreateEnum
CREATE TYPE "PropertyKind" AS ENUM ('RESIDENTIAL', 'TRANSPORT', 'UTILITY');

-- AlterTable
ALTER TABLE "PropertyTemplate" ADD COLUMN     "kind" "PropertyKind" NOT NULL DEFAULT 'RESIDENTIAL';
