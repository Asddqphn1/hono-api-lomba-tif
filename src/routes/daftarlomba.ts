import { Hono } from "hono";
import authmiddleware from "../middleware/authmiddleware";
import prisma from "../db";
import { cors } from "hono/cors";

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
daftarlomba.get('/', authmiddleware, async (c) => {
    const data = await prisma.lomba.findMany({
        select: {
            nama: true,
            tanggal: true,
            lokasi: true,
            deskripsi: true
        },
        orderBy: {
            tanggal: 'asc'
        }
    })
    return c.json({
        status: 'success',
        message : 'Daftar Lomba',
        data : data
    })
})

export default daftarlomba