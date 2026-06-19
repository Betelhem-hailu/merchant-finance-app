/*
  Warnings:

  - You are about to alter the column `openingBalance` on the `FinanceAccount` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(18,2)`.
  - You are about to alter the column `currentBalance` on the `FinanceAccount` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(18,2)`.
  - You are about to alter the column `amount` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(18,2)`.

*/
-- AlterTable
ALTER TABLE "FinanceAccount" ALTER COLUMN "openingBalance" SET DATA TYPE DECIMAL(18,2),
ALTER COLUMN "currentBalance" SET DATA TYPE DECIMAL(18,2);

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(18,2);
