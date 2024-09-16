/*
  Warnings:

  - You are about to drop the column `movieId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `movieId` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the `Movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[imageId,ratedBy]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_userId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_userId_fkey";

-- DropIndex
DROP INDEX "Rating_movieId_userId_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "movieId",
DROP COLUMN "userId",
ADD COLUMN     "imageId" INTEGER NOT NULL,
ADD COLUMN     "postedBy" TEXT;

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "movieId",
DROP COLUMN "userId",
ADD COLUMN     "imageId" INTEGER NOT NULL,
ADD COLUMN     "ratedBy" TEXT;

-- DropTable
DROP TABLE "Movie";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "averageRating" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rating_imageId_ratedBy_key" ON "Rating"("imageId", "ratedBy");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
