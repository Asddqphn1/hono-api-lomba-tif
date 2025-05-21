import { Hono } from "hono";
import prisma from "../db";
import juri from "./juri";
import { cors } from "hono/cors";
import authmiddleware from "../middleware/authmiddleware";
import authpeserta from "../middleware/authpeserta";

const penilaian = new Hono();
penilaian.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

penilaian.get("/:juriId", async (c) => {
  const { juriId } = c.req.param();

  // Ambil data juri + lomba yang dia handle
  const juri = await prisma.juri.findUnique({
    where: { id: juriId },
    include: { lomba: true },
  });

  if (!juri) {
    return c.json({ error: "Juri tidak ditemukan" }, 404);
  }

  // Ambil semua submission dari lomba yang dihandle juri
  const submissions = await prisma.submission.findMany({
    where: {
      pesertalomba: {
        lomba_id: juri.lomba_id,
      },
    },
    include: {
      pesertalomba: {
        include: {
          peserta: {
            select: {
              nama: true,
            },
          },
          lomba: {
            select: {
              nama: true,
              jenis_lomba: true,
            },
          },
        },
      },
      penilaian: {
        where: {
          juri_id: juriId,
        },
      },
    },
  });

  return c.json({
    status: "success",
    data: submissions,
  });
});

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
        {
          status: "error",
          message: "Juri tidak ditemukan atau tidak terdaftar.",
        },
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

penilaian.get(
  "/daftarnilai/:lombaID",
  authmiddleware,
  authpeserta,
  async (c) => {
    try {
      const { lombaID } = c.req.param();
      if (!lombaID) {
        return c.json(
          { status: "error", message: "Lomba tidak ditemukan." },
          404
        );
      }
      const nilaiLomba = await prisma.penilaian.findMany({
        where: {
          submission: {
            pesertalomba: {
              lomba_id: lombaID,
            },
          },
        },
        include: {
          juri: {
            select: {
              nama: true,
              users: {
                select: {
                  email: true,
                },
              },
            },
          },
          submission: {
            include: {
              pesertalomba: {
                include: {
                  peserta: {
                    select: {
                      nama: true,
                      users: {
                        select: {
                          email: true,
                        },
                      },
                    },
                  },
                  lomba: {
                    select: {
                      nama: true,
                    },
                  },
                },
              },
            },
          },
        },
        orderBy: {
          nilai_penilaian: "desc",
        },
      });

      if (!nilaiLomba || nilaiLomba.length === 0) {
        return c.json(
          { status: "error", message: "Belum ada penilaian untuk lomba ini." },
          404
        );
      }

      // Format response
      const formattedResponse = nilaiLomba.map((nilai) => ({
        id_penilaian: nilai.id,
        nilai: nilai.nilai_penilaian,
        deskripsi: nilai.deskripsi_penilaian,
        tanggal_penilaian: nilai.created_at,
        juri: {
          nama: nilai.juri.nama,
          email: nilai.juri.users.email,
        },
        peserta: {
          nama: nilai.submission.pesertalomba.peserta.nama,
          email: nilai.submission.pesertalomba.peserta.users.email,
        },
        lomba: {
          nama: nilai.submission.pesertalomba.lomba.nama,
        },
        submission: {
          file_url: nilai.submission.file_url,
          waktu_submission: nilai.submission.submission_time,
        },
      }));

      return c.json({
        success: true,
        data: formattedResponse,
      });
    } catch (error) {
      return c.json(
        {
          status: "error",
          message: error,
        },
        500
      );
    }
  }
);

export default penilaian;
