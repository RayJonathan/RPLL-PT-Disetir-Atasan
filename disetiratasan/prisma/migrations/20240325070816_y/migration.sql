/*
  Warnings:

  - The primary key for the `colorbybrands` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `Id` on the `colorbybrands` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `optionbycars` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `Id` on the `optionbycars` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Made the column `Id_user` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Id_carDet` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Id_color` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Id_rim` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Id_trim` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Id_option` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `brands` MODIFY `Name` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `cardetails` MODIFY `Type` VARCHAR(191) NULL,
    MODIFY `Price` INTEGER NULL,
    MODIFY `Description` VARCHAR(191) NULL,
    MODIFY `Image` VARCHAR(191) NULL,
    MODIFY `Acceleration` VARCHAR(191) NULL,
    MODIFY `Power` VARCHAR(191) NULL,
    MODIFY `Torque` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `cars` MODIFY `Model` VARCHAR(191) NULL,
    MODIFY `Category` VARCHAR(191) NULL,
    MODIFY `Production` INTEGER NULL,
    MODIFY `Description` VARCHAR(191) NULL,
    MODIFY `Image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `colorbybrands` DROP PRIMARY KEY,
    MODIFY `Id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`Id`);

-- AlterTable
ALTER TABLE `optionbycars` DROP PRIMARY KEY,
    MODIFY `Id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`Id`);

-- AlterTable
ALTER TABLE `orders` MODIFY `Id_user` VARCHAR(191) NOT NULL,
    MODIFY `Id_carDet` VARCHAR(191) NOT NULL,
    MODIFY `Id_color` VARCHAR(191) NOT NULL,
    MODIFY `Id_rim` VARCHAR(191) NOT NULL,
    MODIFY `Id_trim` VARCHAR(191) NOT NULL,
    MODIFY `Id_option` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `Password` VARCHAR(191) NULL,
    MODIFY `FirstName` VARCHAR(191) NULL,
    MODIFY `Number` VARCHAR(191) NULL,
    MODIFY `Country` VARCHAR(191) NULL,
    MODIFY `Region` VARCHAR(191) NULL,
    MODIFY `City` VARCHAR(191) NULL,
    MODIFY `Address` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_Id_user_fkey` FOREIGN KEY (`Id_user`) REFERENCES `Users`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_Id_carDet_fkey` FOREIGN KEY (`Id_carDet`) REFERENCES `CarDetails`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_Id_color_fkey` FOREIGN KEY (`Id_color`) REFERENCES `Colors`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_Id_rim_fkey` FOREIGN KEY (`Id_rim`) REFERENCES `Rims`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_Id_trim_fkey` FOREIGN KEY (`Id_trim`) REFERENCES `Trims`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_Id_option_fkey` FOREIGN KEY (`Id_option`) REFERENCES `Options`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
