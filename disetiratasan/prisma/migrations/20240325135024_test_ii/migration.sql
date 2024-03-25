/*
  Warnings:

  - Made the column `Password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `FirstName` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `LastName` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Number` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Country` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Region` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `City` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Address` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `Password` VARCHAR(191) NOT NULL,
    MODIFY `FirstName` VARCHAR(191) NOT NULL,
    MODIFY `LastName` VARCHAR(191) NOT NULL,
    MODIFY `Number` VARCHAR(191) NOT NULL,
    MODIFY `Country` VARCHAR(191) NOT NULL,
    MODIFY `Region` VARCHAR(191) NOT NULL,
    MODIFY `City` VARCHAR(191) NOT NULL,
    MODIFY `Address` VARCHAR(191) NOT NULL;
