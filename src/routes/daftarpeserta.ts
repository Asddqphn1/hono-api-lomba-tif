import { Hono } from "hono";
import prisma from "../db";
import { cors } from "hono/cors";
import authmiddleware from "../middleware/authmiddleware";
import authadmin from "../middleware/authadmin";

const daftarpeserta = new Hono();
daftarpeserta.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);
daftarpeserta.get("/", authmiddleware, authadmin, async (c) => {
  try{
    const daftarpeserta = await prisma.peserta.findMany({
      select :{
        nama : true,
        users_id : true,
        created_at : true,
        pesertalomba : {
          select : {
            lomba_id : true,
            lomba : {
              select : {
                nama : true
              }
            }
          }
        }
      }
    })
    return c.json({
      status : "Success",
      message : "Berhasil ambil data Peserta",
      data : daftarpeserta
    })

  }catch(error){
    return c.json({
      status : "error",
      message : error
    },500)
    
  }
});
daftarpeserta.post("/:id/:idLomba", authmiddleware, async (c) => {
  try {
    const { nama } = await c.req.json();
    const idpeserta = c.req.param("id");
    const idlomba = c.req.param("idLomba");
    const existPeserta = await prisma.peserta.findFirst({
      where: { nama: nama },
    });
    if (existPeserta) {
      return c.json(
        {
          status: "Gagal",
          message: "Peserta sudah ada",
        },
        400
      );
    }

    const result = await prisma.peserta.create({
      data: {
        users_id: idpeserta,
        nama: nama,
      },
    });

    await prisma.pesertalomba.create({
      data: {
        lomba_id: idlomba,
        peserta_id: result.id,
      },
    });
    return c.json({
      status: "success",
      message: "Peserta berhasil ditambahkan",
      data: result,
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
});

export default daftarpeserta;
