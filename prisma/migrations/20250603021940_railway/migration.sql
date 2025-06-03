-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PESERTA', 'USERS', 'JURI', 'ADMIN');

-- CreateEnum
CREATE TYPE "Jenis_lomba" AS ENUM ('INDIVIDU', 'TIM');

-- CreateTable
CREATE TABLE "lomba" (
    "id" VARCHAR(20) NOT NULL,
    "tanggal" DATE NOT NULL,
    "jenis_lomba" "Jenis_lomba" NOT NULL,
    "lokasi" VARCHAR(50) NOT NULL,
    "nama" VARCHAR(40) NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "bataswaktu" DATE NOT NULL,
    "deskripsi" TEXT,
    "jumlah_tim" INTEGER,

    CONSTRAINT "lomba_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sertifikat" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "url" TEXT NOT NULL,
    "lomba_id" VARCHAR(20) NOT NULL,

    CONSTRAINT "sertifikat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" VARCHAR(30) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "nama" VARCHAR(30) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USERS',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "users_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "juri" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nama" VARCHAR(30) NOT NULL,
    "lomba_id" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "users_id" UUID NOT NULL,

    CONSTRAINT "juri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penilaian" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "juri_id" UUID NOT NULL,
    "submission_id" UUID NOT NULL,
    "nilai_penilaian" DECIMAL(5,2),
    "deskripsi_penilaian" VARCHAR(100),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "penilaian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "peserta" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nama" VARCHAR(30) NOT NULL,
    "users_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "peserta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pesertalomba" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "peserta_id" UUID NOT NULL,
    "lomba_id" VARCHAR(20) NOT NULL,

    CONSTRAINT "pesertalomba_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "pesertalomba_id" UUID NOT NULL,
    "file_url" VARCHAR(255) NOT NULL,
    "submission_time" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anggotaTim" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nama" VARCHAR(30) NOT NULL,
    "peserta_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anggotaTim_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pesertalomba_peserta_id_lomba_id_key" ON "pesertalomba"("peserta_id", "lomba_id");

-- CreateIndex
CREATE UNIQUE INDEX "submission_pesertalomba_id_key" ON "submission"("pesertalomba_id");

-- AddForeignKey
ALTER TABLE "sertifikat" ADD CONSTRAINT "sertifikat_lomba_fk" FOREIGN KEY ("lomba_id") REFERENCES "lomba"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "juri" ADD CONSTRAINT "juri_lomba_fk" FOREIGN KEY ("lomba_id") REFERENCES "lomba"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "juri" ADD CONSTRAINT "juri_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penilaian" ADD CONSTRAINT "penilaian_juri_id_fkey" FOREIGN KEY ("juri_id") REFERENCES "juri"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "penilaian" ADD CONSTRAINT "penilaian_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submission"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "peserta" ADD CONSTRAINT "peserta_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pesertalomba" ADD CONSTRAINT "pesertalomba_lomba_fk" FOREIGN KEY ("lomba_id") REFERENCES "lomba"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pesertalomba" ADD CONSTRAINT "pesertalomba_peserta_fk" FOREIGN KEY ("peserta_id") REFERENCES "peserta"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "submission" ADD CONSTRAINT "submission_pesertalomba_id_fkey" FOREIGN KEY ("pesertalomba_id") REFERENCES "pesertalomba"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "anggotaTim" ADD CONSTRAINT "anggotaTim_peserta_id_fkey" FOREIGN KEY ("peserta_id") REFERENCES "peserta"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
