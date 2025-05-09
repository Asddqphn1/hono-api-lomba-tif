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
//get all juri
juri.get("/daftarjuri", authadmin, authmiddleware, async (c) => {
  try {
    const namajuri = c.req.query("nama");
    const namalomba = c.req.query("lomba");
    if (namajuri) {
      const juriList = await prisma.juri.findMany({
        where: {
          nama: namajuri,
        },
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
          status: "succes",
          message: "Berhasil ambil data juri",
          data: juriList,
        },
        200
      );
    }
    if (namalomba) {
      const juriList = await prisma.juri.findMany({
        where: {
          lomba : {
            nama : namalomba 
          },
        },
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
      return c.json({
        status : "succes",
        message : "Berhasil ambil data juri",
        data : juriList
      }, 200)
    }
  } catch (error) {
    return c.json({
      status: "error",
      message: error,
    });
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
juri.patch("/hapusjuri/:id", authadmin, authmiddleware, async (c) => {
  try {
    const idJuri = c.req.param("id");
    const deletejuri =
      await prisma.$queryRaw`DELETE FROM JURI WHERE id = ${idJuri}`;
    const updatejuri = await prisma.users.update({
      where: {
        id: idJuri,
      },
      data: {
        role: "USERS",
      },
    });

    return c.json(
      {
        status: "succes",
        message: `Berhasil hapus juri ${updatejuri.nama}`,
        data: deletejuri,
      },
      200
    );
  } catch (error) {
    return c.json(
      {
        status: "error",
        message: "Internal server error",
      },
      500
    );
  }
});

export default juri;
