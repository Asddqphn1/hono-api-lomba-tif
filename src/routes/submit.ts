import { Hono } from "hono";
import { cors } from "hono/cors";
import authmiddleware from "../middleware/authmiddleware";
import authpeserta from "../middleware/authpeserta";
import prisma from "../db";

const submit = new Hono();
submit.use(
  "*",
  cors({
    origin: "http://localhost:5173",
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


export default submit