-- CreateEnum
CREATE TYPE "GameStatus" AS ENUM ('ACTIVE', 'ENDED');

-- CreateEnum
CREATE TYPE "TransactionDirection" AS ENUM ('CREDIT', 'DEBIT', 'TRANSFER');

-- CreateEnum
CREATE TYPE "TransactionKind" AS ENUM ('BALANCE_UPDATE', 'TRANSFER', 'BUY_PROPERTY', 'PAY_RENT', 'MORTGAGE_PROPERTY', 'COMMUNITY_CHEST', 'CHANCE', 'TAX');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "GameStatus" NOT NULL DEFAULT 'ACTIVE',
    "playersCount" INTEGER NOT NULL,
    "initialBalance" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gameId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "seat" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NfcCard" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "uid" TEXT NOT NULL,
    "playerId" UUID NOT NULL,

    CONSTRAINT "NfcCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionType" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" "TransactionKind" NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "TransactionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyTemplate" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT,
    "price" INTEGER,
    "rentBase" INTEGER,

    CONSTRAINT "PropertyTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionTemplate" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "direction" "TransactionDirection" NOT NULL,
    "defaultAmount" INTEGER,
    "description" TEXT,
    "transactionTypeId" UUID NOT NULL,
    "propertyTemplateId" UUID,

    CONSTRAINT "TransactionTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gameId" UUID NOT NULL,
    "transactionTypeId" UUID NOT NULL,
    "direction" "TransactionDirection" NOT NULL,
    "amount" INTEGER NOT NULL,
    "note" TEXT,
    "fromPlayerId" UUID,
    "toPlayerId" UUID,
    "fromBalanceBefore" INTEGER,
    "fromBalanceAfter" INTEGER,
    "toBalanceBefore" INTEGER,
    "toBalanceAfter" INTEGER,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "Game_status_createdAt_idx" ON "Game"("status", "createdAt");

-- CreateIndex
CREATE INDEX "Player_gameId_idx" ON "Player"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "Player_gameId_seat_key" ON "Player"("gameId", "seat");

-- CreateIndex
CREATE UNIQUE INDEX "NfcCard_uid_key" ON "NfcCard"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "NfcCard_playerId_key" ON "NfcCard"("playerId");

-- CreateIndex
CREATE INDEX "NfcCard_uid_idx" ON "NfcCard"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "TransactionType_code_key" ON "TransactionType"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyTemplate_name_key" ON "PropertyTemplate"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TransactionTemplate_name_key" ON "TransactionTemplate"("name");

-- CreateIndex
CREATE INDEX "TransactionTemplate_transactionTypeId_idx" ON "TransactionTemplate"("transactionTypeId");

-- CreateIndex
CREATE INDEX "Transaction_gameId_createdAt_idx" ON "Transaction"("gameId", "createdAt");

-- CreateIndex
CREATE INDEX "Transaction_fromPlayerId_idx" ON "Transaction"("fromPlayerId");

-- CreateIndex
CREATE INDEX "Transaction_toPlayerId_idx" ON "Transaction"("toPlayerId");

-- CreateIndex
CREATE INDEX "Transaction_transactionTypeId_idx" ON "Transaction"("transactionTypeId");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NfcCard" ADD CONSTRAINT "NfcCard_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionTemplate" ADD CONSTRAINT "TransactionTemplate_transactionTypeId_fkey" FOREIGN KEY ("transactionTypeId") REFERENCES "TransactionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionTemplate" ADD CONSTRAINT "TransactionTemplate_propertyTemplateId_fkey" FOREIGN KEY ("propertyTemplateId") REFERENCES "PropertyTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_transactionTypeId_fkey" FOREIGN KEY ("transactionTypeId") REFERENCES "TransactionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fromPlayerId_fkey" FOREIGN KEY ("fromPlayerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_toPlayerId_fkey" FOREIGN KEY ("toPlayerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
