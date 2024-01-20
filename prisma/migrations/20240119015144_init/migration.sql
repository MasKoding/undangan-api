-- CreateTable
CREATE TABLE "Comment" (
    "uuid" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "hadir" INTEGER NOT NULL,
    "komentar" TEXT,
    "imgSrc" TEXT,
    "created_at" TEXT NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_nama_key" ON "Comment"("nama");
