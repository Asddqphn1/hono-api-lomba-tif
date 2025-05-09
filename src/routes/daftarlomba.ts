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
      nama: true,
      tanggal: true,
      lokasi: true,
      deskripsi: true,
      url: true,
      bataswaktu: true
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
    const { id, nama, tanggal, lokasi, url_gambar, bataswaktu, deskripsi } =
      await c.req.json();
      const existLomba = await prisma.lomba.findUnique({
        where: { id: id },
      });
      if (existLomba){
        return c.json({
            status : "Gagal",
            message : "Lomba sudah ada"
        })
      }
    const data = await prisma.lomba.create({
      data: {
        id: id,
        nama: nama,
        tanggal: tanggal,
        lokasi: lokasi,
        url: url_gambar,
        bataswaktu: bataswaktu,
        deskripsi: deskripsi,
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
