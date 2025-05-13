import { Hono } from "hono";
import authmiddleware from "../middleware/authmiddleware";
import prisma from "../db";
import { cors } from "hono/cors";
import authadmin from "../middleware/authadmin";

const daftarlomba = new Hono();
daftarlomba.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);
daftarlomba.get("/", authmiddleware, async (c) => {
  const data = await prisma.lomba.findMany({
    select: {
      id : true,
      nama: true,
      tanggal: true,
      lokasi: true,
      deskripsi: true,
      url: true,
      bataswaktu: true,
      jenis_lomba : true
    },
    orderBy: {
      tanggal: "asc",
    },
  });
  return c.json({
    status: "success",
    message: "Daftar Lomba",
    data: data,
  });
});
daftarlomba.post("/", authmiddleware, authadmin, async (c) => {
  try {
    
    const { id, nama, tanggal, lokasi, url, bataswaktu, deskripsi, jenis_lomba } =
      await c.req.json();
      const existLomba = await prisma.lomba.findUnique({
        where: { id: id },
      });
      if (existLomba){
        return c.json({
            status : "Gagal",
            message : "Lomba sudah ada"
        },400)
      }
      if (!["INDIVIDU", "TIM"].includes(jenis_lomba)) {
        return c.json(
          { status: "error", message: "Jenis lomba tidak valid" },
          400
        );
      }
    const data = await prisma.lomba.create({
      data: {
        id: id,
        nama: nama,
        tanggal: tanggal,
        lokasi: lokasi,
        url: url,
        bataswaktu: bataswaktu,
        deskripsi: deskripsi,
        jenis_lomba : jenis_lomba

      },
    });
    return c.json({
        status : "succes",
        message : "Berhasil Menambah Lomba",
        data : data
    })
  } catch (error) {
    return c.json({
        status : "error",
        message : error
    }, 500)
  }
});

export default daftarlomba;
