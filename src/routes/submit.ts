import { Hono } from "hono";
import { cors } from "hono/cors";
import authmiddleware from "../middleware/authmiddleware.js";
import authpeserta from "../middleware/authpeserta.js";
import prisma from "../db.js";

const submit = new Hono();
submit.use(
  "*",
  cors({
    origin: [
      "http://localhost:5173",
      "https://lomba-tif.vercel.app",
      "https://lomba-tif.my.id",
    ],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

submit.post('/:id', authmiddleware, authpeserta, async (c) => {
  try{
    const idpeserta = c.req.param("id");
    const { url } = await c.req.json()
    const postsubmit = await prisma.submission.create({
      data : {
        pesertalomba_id : idpeserta,
        file_url : url

      }
    })

    return c.json({
      status : "succes",
      message : "berhasil submit",
      data : postsubmit
    }, 200)
  }catch(err){
    return c.json({
      status : "error",
      message : err
    }, 500)
  }
})

submit.get('/:submissionId', async (c) => {
  const { submissionId } = c.req.param();

  // Ambil submission berdasarkan ID, lengkap dengan relasi yang dibutuhkan
  const data = await prisma.submission.findUnique({
    where: { id: submissionId },
    select : {
      submission_time: true,
      file_url: true,
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
    },
  });

  if (!data) {
    return c.json({ error: 'Submission tidak ditemukan' }, 404);
  }

  return c.json({
    status: 'success',
    data : data,
  });
});

submit.get('/users/:idUser', authmiddleware, authpeserta, async (c) => {
  try{
    const idUser = c.req.param("idUser");
    const submissionList = await prisma.submission.findMany({
      where: {
        pesertalomba: {
          peserta: {
            users_id: idUser,
          },
        },
      },
      select: {
        id: true,
        file_url: true,
        submission_time: true,
        pesertalomba: {
          select: {
            lomba: {
              select: {
                id: true,
                nama: true,
                jenis_lomba: true,
              },
            },
          },
        },
      }
    });

    return c.json({
      status: "success",
      data: submissionList,
    });
  }catch (error) {
    console.error(error);
    return c.json(
      {
        status: "error",
        message: "Internal server error",
      },
      500
    );
  }
})

submit.get(
  "/submission/:pesertalombaId",
  authmiddleware,
  authpeserta,
  async (c) => {
    try {
      const pesertalombaId = c.req.param("pesertalombaId");

      const submission = await prisma.submission.findUnique({
        where: {
          pesertalomba_id: pesertalombaId,
        },
        include: {
          pesertalomba: {
            include: {
              lomba: {
                select: {
                  id: true,
                  nama: true,
                  jenis_lomba: true,
                },
              },
            },
          },
        },
      });

      if (!submission) {
        return c.json(
          {
            status: "success",
            data: null,
            message: "No submission found for this competition participant",
          },
          404
        );
      }

      return c.json({
        status: "success",
        data: submission,
      });
    } catch (error) {
      console.error(error);
      return c.json(
        {
          status: "error",
          message: "Internal server error",
        },
        500
      );
    }
  }
);

submit.delete(
  "/hapus/:submissionId",
  authmiddleware,
  authpeserta,
  async (c) => {
    try {
      const submissionId = c.req.param("submissionId");

      // 1. Cek apakah submission ada dan milik user
      const submission = await prisma.submission.findUnique({
        where: { id: submissionId },
        include: {
          pesertalomba: {
            include: {
              peserta: true
            }
          },
          penilaian: true // Tambahkan ini untuk cek penilaian
        }
      });

      if (!submission) {
        return c.json(
          {
            status: "error",
            message: "Submission tidak ditemukan",
          },
          404
        );
      }

      // 3. Cek apakah sudah ada penilaian
      if (submission.penilaian && submission.penilaian.length > 0) {
        return c.json(
          {
            status: "error",
            message: "Submission tidak dapat dihapus karena sudah dinilai",
          },
          400
        );
      }

      // 4. Jika semua validasi passed, hapus submission
      await prisma.submission.delete({
        where: { id: submissionId }
      });

      return c.json({
        status: "success",
        message: "Submission berhasil dihapus",
      });

    } catch (error) {
      console.error(error);
      return c.json(
        {
          status: "error",
          message: "Internal server error",
        },
        500
      );
    }
  }
);



export default submit