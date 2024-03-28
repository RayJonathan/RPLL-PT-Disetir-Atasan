/*
  Warnings:

  - You are about to drop the column `Nama` on the `options` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `colors` ADD COLUMN `Image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `options` DROP COLUMN `Nama`,
    ADD COLUMN `Name` VARCHAR(191) NULL,
    ADD COLUMN `Price` INTEGER NULL;
