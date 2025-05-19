import { Hono } from "hono";
import prisma from "../db";
import juri from "./juri";
import { cors } from "hono/cors";

const penilaian = new Hono();
penilaian.use("*", cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true
}));
penilaian.post("/:submission_id/:juri_id", async (c) => {
  try {
    const submission_id = c.req.param("submission_id");
    const juri_id = c.req.param("juri_id");
    const { nilai_penilaian, deskripsi_penilaian } = await c.req.json();

    // cek apakah juri_id valid
    const juriData = await prisma.juri.findUnique({
      where: { id: juri_id },
    });

    if (!juriData) {
      return c.json(
        { status: "error", message: "Juri tidak ditemukan atau tidak terdaftar." },
        403
      );
    }

    // cek apakah submission sudah dinilai juri ini
    const existing = await prisma.penilaian.findFirst({
      where: {
        juri_id,
        submission_id,
      },
    });

    if (existing) {
      return c.json(
        { status: "error", message: "Submission ini sudah Anda nilai." },
        400
      );
    }

    // buat penilaian baru
    const penilaian = await prisma.penilaian.create({
      data: {
        juri_id,
        submission_id,
        status_penilaian: "S", // S = Sudah
        nilai_penilaian,
        deskripsi_penilaian,
      },
    });

    return c.json({
      status: "success",
      message: "Penilaian berhasil ditambahkan.",
      data: penilaian,
    });
  } catch (e) {
    console.error(e);
    return c.json(
      {
        status: "error",
        message: "Terjadi kesalahan saat menilai.",
        error: e instanceof Error ? e.message : "Unknown error",
      },
      500
    );
  }
});

export default penilaian;
