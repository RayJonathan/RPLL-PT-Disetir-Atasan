/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `region` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `zipcode` on the `user` table. All the data in the column will be lost.
  - Added the required column `Address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `City` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Country` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FirstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Region` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `address`,
    DROP COLUMN `city`,
    DROP COLUMN `country`,
    DROP COLUMN `email`,
    DROP COLUMN `firstname`,
    DROP COLUMN `id`,
    DROP COLUMN `lastname`,
    DROP COLUMN `password`,
    DROP COLUMN `phone`,
    DROP COLUMN `region`,
    DROP COLUMN `zipcode`,
    ADD COLUMN `Address` VARCHAR(191) NOT NULL,
    ADD COLUMN `City` VARCHAR(191) NOT NULL,
    ADD COLUMN `Country` VARCHAR(191) NOT NULL,
    ADD COLUMN `Email` VARCHAR(191) NOT NULL,
    ADD COLUMN `FirstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `Id` VARCHAR(191) NOT NULL,
    ADD COLUMN `LastName` VARCHAR(191) NULL,
    ADD COLUMN `Number` VARCHAR(191) NOT NULL,
    ADD COLUMN `Password` VARCHAR(191) NOT NULL,
    ADD COLUMN `Region` VARCHAR(191) NOT NULL,
    ADD COLUMN `Type` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`Id`);

-- CreateTable
CREATE TABLE `Brand` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Car` (
    `Id` VARCHAR(191) NOT NULL,
    `Id_brand` VARCHAR(191) NULL,
    `Model` VARCHAR(191) NULL,
    `Category` VARCHAR(191) NULL,
    `Production` INTEGER NULL,
    `Description` VARCHAR(191) NULL,
    `Image` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CarDetail` (
    `Id` VARCHAR(191) NOT NULL,
    `Id_car` VARCHAR(191) NULL,
    `Type` VARCHAR(191) NULL,
    `Price` INTEGER NULL,
    `Description` VARCHAR(191) NULL,
    `Image` VARCHAR(191) NULL,
    `Acceleration` VARCHAR(191) NULL,
    `Power` VARCHAR(191) NULL,
    `Torque` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Color` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Option` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `Id` VARCHAR(191) NOT NULL,
    `Id_user` VARCHAR(191) NULL,
    `Id_carDet` VARCHAR(191) NULL,
    `Id_color` VARCHAR(191) NULL,
    `Id_rim` VARCHAR(191) NULL,
    `Id_trim` VARCHAR(191) NULL,
    `Id_option` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rim` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NULL,
    `Price` INTEGER NULL,
    `Description` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trim` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NULL,
    `Price` INTEGER NULL,
    `Description` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_Id_brand_fkey` FOREIGN KEY (`Id_brand`) REFERENCES `Brand`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarDetail` ADD CONSTRAINT `CarDetail_Id_car_fkey` FOREIGN KEY (`Id_car`) REFERENCES `Car`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_Id_user_fkey` FOREIGN KEY (`Id_user`) REFERENCES `User`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
