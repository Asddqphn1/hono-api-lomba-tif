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
    const result =
    await prisma.$queryRaw`SELECT usr.nama as nama_peserta, pst.id, lmb.nama as nama_lomba, created_at as waktu_pendaftaran FROM USERS USR, LOMBA LMB, PESERTA PST, PESERTALOMBA PSL WHERE USR.ID = PST.users_id AND PST.ID = PSL.peserta_id AND PSL.lomba_id = LMB.ID ORDER BY usr.nama ASC`;
    return c.json({
        status: "success",
        message: "Daftar Peserta",
        data: result,
    });
});

export default daftarpeserta;