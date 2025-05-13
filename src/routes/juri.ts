import { Hono } from "hono";
import { cors } from "hono/cors";
import authadmin from "../middleware/authadmin";
import authmiddleware from "../middleware/authmiddleware";
import prisma from "../db";

const juri = new Hono();

juri.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);
//get all juri
juri.get("/", authadmin, authmiddleware, async (c) => {
  try {
    const namajuri = c.req.query("nama");
    const namalomba = c.req.query("lomba");

    const whereClause: any = {};

    if (namajuri) {
      whereClause.nama = namajuri;
    }

    if (namalomba) {
      whereClause.lomba = {
        nama: namalomba,
      };
    }

    const juriList = await prisma.juri.findMany({
      where: whereClause,
      select: {
        id: true,
        nama: true,
        lomba_id: true,
        created_at: true,
        lomba: {
          select: {
            nama: true,
            tanggal: true,
            lokasi: true,
          },
        },
        users: {
          select: {
            email: true,
            role: true,
          },
        },
      },
    });

    return c.json(
      {
        status: "success",
        message: "Berhasil ambil data juri",
        data: juriList,
      },
      200
    );
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
});

//ubah role users --> juri
juri.patch("/:id", authadmin, authmiddleware, async (c) => {
  try {
    const idjuri = c.req.param("id"); // ubah data ke number

    const { namaJuri, id_lomba } = await c.req.json();
    const existJuri = await prisma.juri.findFirst({
      where: { users_id: idjuri },
    });

    // cek angka
    if (existJuri) {
      return c.json(
        {
          status: "Gagal",
          message: "Sudah menjadi juri",
        },
        400
      );
    }

    // update role
    const updatedUser = await prisma.users.update({
      where: {
        id: idjuri,
      },
      data: {
        role: "JURI",
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

    return c.json(
      {
        success: true,
        message: `berhasil menambah ${tambahJuri.nama} sebagai juri`,
        data: updatedUser.nama,
      },
      200
    );
  } catch (error) {
    console.error(error);
    return c.json({ error: "Gagal mengupdate data" }, 500);
  }
});
juri.patch("/hapus/:id", authadmin, authmiddleware, async (c) => {
  try {
    const idJuri = c.req.param("id");  // Tidak perlu parseInt, karena UUID adalah string

    // Cek apakah juri dengan ID UUID tersebut ada
    const juriToDelete = await prisma.juri.findUnique({
      where: { id: idJuri }
    });

    if (!juriToDelete) {
      return c.json({
        status: "error",
        message: `Juri dengan ID ${idJuri} tidak ditemukan`
      }, 404);
    }

    // Menghapus data juri
    const deleteJuri = await prisma.juri.delete({
      where: { id: idJuri }
    });

    // Mengupdate role pengguna menjadi 'USERS'
    const updateJuri = await prisma.users.update({
      where: { id: juriToDelete.users_id },
      data: { role: "USERS" }
    });

    return c.json({
      status: "success",
      message: `Berhasil menghapus juri ${updateJuri.nama}`,
      data: deleteJuri
    }, 200);

  } catch (error) {
    console.error(error);  // Mencetak detail error ke console
    return c.json({
      status: "error",
      message: "Terjadi kesalahan saat menghapus data juri",
      error: error instanceof Error ? error.message : "Unknown error"  // Memberikan detail error untuk debugging
    }, 500);
  }
});

export default juri;
