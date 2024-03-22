/*
  Warnings:

  - You are about to drop the `brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `car` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cardetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `color` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rim` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `signuptest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trim` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `car` DROP FOREIGN KEY `Car_Id_brand_fkey`;

-- DropForeignKey
ALTER TABLE `cardetail` DROP FOREIGN KEY `CarDetail_Id_car_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_Id_user_fkey`;

-- DropTable
DROP TABLE `brand`;

-- DropTable
DROP TABLE `car`;

-- DropTable
DROP TABLE `cardetail`;

-- DropTable
DROP TABLE `color`;

-- DropTable
DROP TABLE `option`;

-- DropTable
DROP TABLE `order`;

-- DropTable
DROP TABLE `rim`;

-- DropTable
DROP TABLE `signuptest`;

-- DropTable
DROP TABLE `trim`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Brands` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cars` (
    `Id` VARCHAR(191) NOT NULL,
    `Id_brand` VARCHAR(191) NOT NULL,
    `Model` VARCHAR(191) NOT NULL,
    `Category` VARCHAR(191) NOT NULL,
    `Production` INTEGER NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CarDetails` (
    `Id` VARCHAR(191) NOT NULL,
    `Id_car` VARCHAR(191) NOT NULL,
    `Type` VARCHAR(191) NOT NULL,
    `Price` INTEGER NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Image` VARCHAR(191) NOT NULL,
    `Acceleration` VARCHAR(191) NOT NULL,
    `Power` VARCHAR(191) NOT NULL,
    `Torque` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Colors` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ColorByBrands` (
    `Id` VARCHAR(191) NOT NULL,
    `Id_color` VARCHAR(191) NOT NULL,
    `Id_brand` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Options` (
    `Id` VARCHAR(191) NOT NULL,
    `Nama` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OptionByCars` (
    `Id` VARCHAR(191) NOT NULL,
    `Id_option` VARCHAR(191) NOT NULL,
    `Id_car` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
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
CREATE TABLE `Rims` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NULL,
    `Price` INTEGER NULL,
    `Description` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trims` (
    `Id` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NULL,
    `Price` INTEGER NULL,
    `Description` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `Id` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NULL,
    `Number` VARCHAR(191) NOT NULL,
    `Country` VARCHAR(191) NOT NULL,
    `Region` VARCHAR(191) NOT NULL,
    `City` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Type` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Users_Email_key`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cars` ADD CONSTRAINT `Cars_Id_brand_fkey` FOREIGN KEY (`Id_brand`) REFERENCES `Brands`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarDetails` ADD CONSTRAINT `CarDetails_Id_car_fkey` FOREIGN KEY (`Id_car`) REFERENCES `Cars`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ColorByBrands` ADD CONSTRAINT `ColorByBrands_Id_color_fkey` FOREIGN KEY (`Id_color`) REFERENCES `Colors`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ColorByBrands` ADD CONSTRAINT `ColorByBrands_Id_brand_fkey` FOREIGN KEY (`Id_brand`) REFERENCES `Brands`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OptionByCars` ADD CONSTRAINT `OptionByCars_Id_option_fkey` FOREIGN KEY (`Id_option`) REFERENCES `Options`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OptionByCars` ADD CONSTRAINT `OptionByCars_Id_car_fkey` FOREIGN KEY (`Id_car`) REFERENCES `Cars`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
