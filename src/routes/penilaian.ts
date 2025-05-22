import { Hono } from "hono";
import prisma from "../db";
import { cors } from "hono/cors";
import authmiddleware from "../middleware/authmiddleware";
import authjuri from "../middleware/authjuri";
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

penilaian.get('/:juriId',authmiddleware, authjuri, async (c) => {
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




penilaian.post("/:submission_id/:juri_id",authmiddleware, authjuri,  async (c) => {
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
        select: {
          nilai_penilaian: true,
          submission: {
            select: {
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
        nilai: nilai.nilai_penilaian,
        peserta: {
          nama: nilai.submission.pesertalomba.peserta.nama,
          email: nilai.submission.pesertalomba.peserta.users.email,
        },
        lomba: {
          nama: nilai.submission.pesertalomba.lomba.nama,
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

penilaian.get("/peserta/:submissionid", async (c) => {
  const submissionid = c.req.param("submissionid");
  try {
    const penilaian = await prisma.penilaian.findMany({
      where: {
        submission_id: submissionid,
      },
      select: {
        nilai_penilaian: true,
        deskripsi_penilaian: true,
        created_at: true,
        juri: {
          select: {
            lomba: {
              select: {
                nama: true,
              },
            },
          },
        },
      },
    });

    if (!penilaian || penilaian.length === 0) {
      return c.json({ error: "Penilaian tidak ditemukan" }, 404);
    }
    return c.json({
      status: "success",
      message: "berhasil ambil data",
      data: penilaian,
    });
  } catch (error) {
    console.error("Error:", error); // Logging the error
    return c.json({
      status: "error",
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined, // Displaying stack trace for debugging
    });
  }
});

penilaian.get("/peserta/:id/penilaian", async (c) => {
  const pesertaId = c.req.param("id");

  try {
    // Query ke database menggunakan Prisma
    const pesertaWithPenilaian = await prisma.peserta.findMany({
      where: { users_id: pesertaId },
      select: {
        id: true,
        nama: true,
        pesertalomba: {
          select: {
            lomba: {
              select: {
                id: true,
                nama: true,
                jenis_lomba: true,
                tanggal: true,
              },
            },
            submission: {
              select: {
                penilaian: {
                  select: {
                    nilai_penilaian: true,
                    deskripsi_penilaian: true,
                    created_at: true,
                    juri: {
                      select: {
                        id: true,
                        users: {
                          select: {
                            id: true,
                            nama: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!pesertaWithPenilaian) {
      return c.json({ error: "Peserta tidak ditemukan" }, 404);
    }

    return c.json({
      status: "success",
      message: "berhasil ambil data",
      data: pesertaWithPenilaian,
    });
  } catch (error) {
    console.error("Error:", error);
    return c.json({ error: "Terjadi kesalahan server" }, 500);
  }
});

export default penilaian;
