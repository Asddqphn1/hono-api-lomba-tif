import { Hono } from "hono";
import { cors } from "hono/cors";
import authadmin from "../middleware/authadmin";
import authmiddleware from "../middleware/authmiddleware";
import prisma from "../db";

const juri = new Hono();

juri.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Authorization", "Content-Type"],
  })
);

juri.patch("/:id", authadmin, authmiddleware, async (c) => {
  try {
    const idjuri = parseInt(c.req.param("id")); // ubah data ke number

    const { namaJuri, id_lomba } = await c.req.json();
    const existJuri = await prisma.juri.findFirst({
      where: { users_id: idjuri },
    });
    // cek angka
    if (isNaN(idjuri)) {
      return c.json({ error: "ID harus berupa angka" }, 400);
    }

    if (existJuri) {
      return c.json({
        status: "Gagal",
        message: "Sudah menjadi juri",
      });
    }

    // update role
    const updatedUser = await prisma.users.update({
      where: {
        id: idjuri,
      },
      data: {
        role: "juri",
      },
    });
    // insert tabel juri
    const tambahJuri = await prisma.juri.create({
      data: {
        nama: namaJuri,
        lomba_id: id_lomba,
        users_id: idjuri,
      },
    });

    return c.json({
      success: true,
      message: `berhasil menambah ${tambahJuri.nama} sebagai juri`,
      data: updatedUser.nama,
    });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Gagal mengupdate data" }, 500);
  }
});

export default juri;
