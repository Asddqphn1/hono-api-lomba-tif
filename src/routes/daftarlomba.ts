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
      id: true,
      nama: true,
      tanggal: true,
      lokasi: true,
      deskripsi: true,
      url: true,
      bataswaktu: true,
      jenis_lomba: true,
      jumlah_tim: true
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
daftarlomba.get("/:id", authmiddleware, async (c) => {
  const idLomba = await c.req.param("id")
  const data = await prisma.lomba.findUnique({
    where : {
      id : idLomba
    },
    select: {
      id: true,
      nama: true,
      tanggal: true,
      lokasi: true,
      deskripsi: true,
      url: true,
      bataswaktu: true,
      jenis_lomba: true,
      jumlah_tim: true,
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
    const {
      id,
      nama,
      tanggal,
      lokasi,
      url, // Pastikan ini sesuai dengan yang dikirim frontend
      bataswaktu,
      deskripsi,
      jenis_lomba,
      jumlah_anggota,
    } = await c.req.json();

    // Validasi jenis lomba
    if (!["INDIVIDU", "TIM"].includes(jenis_lomba)) {
      return c.json(
        { status: "error", message: "Jenis lomba tidak valid" },
        400
      );
    }

    // Validasi khusus untuk lomba TIM
    if (jenis_lomba === "TIM") {
      if (!jumlah_anggota) {
        return c.json(
          {
            status: "error",
            message: "Untuk lomba TIM, jumlah anggota tim harus diisi",
          },
          400
        );
      }
      if (jumlah_anggota < 2 || jumlah_anggota > 30) {
        return c.json(
          {
            status: "error",
            message: "Jumlah anggota tim harus antara 2 sampai 30",
          },
          400
        );
      }
    }

    // Untuk lomba INDIVIDU, set jumlah_tim ke null
    const jumlahTim = jenis_lomba === "INDIVIDU" ? null : jumlah_anggota;

    const existLomba = await prisma.lomba.findUnique({
      where: { id: id },
    });

    if (existLomba) {
      return c.json({ status: "Gagal", message: "Lomba sudah ada" }, 400);
    }

    const data = await prisma.lomba.create({
      data: {
        id,
        nama,
        tanggal: new Date(tanggal), // Pastikan format tanggal benar
        lokasi,
        url,
        bataswaktu: new Date(bataswaktu), // Pastikan format tanggal benar
        deskripsi,
        jenis_lomba,
        jumlah_tim: jumlahTim,
      },
    });

    return c.json({
      status: "success",
      message: "Berhasil Menambah Lomba",
      data,
    });
  } catch (error) {
    console.error("Error:", error);
    return c.json(
      {
        status: "error",
        message: error || "Terjadi kesalahan pada server",
      },
      500
    );
  }
});
daftarlomba.delete("/:id", authmiddleware, authadmin, async (c) => {
  try {
    const id = c.req.param("id");

    const juriLomba = await prisma.juri.findMany({
      where: {
        lomba_id: id,
      },
      include: {
        users: true,
      },
    });
    const hapusJuri = await prisma.juri.deleteMany({
      where: {
        lomba_id: id,
      },
    });
    const userIds = juriLomba.map((juri) => juri.users_id);
    const updatedUsers = await prisma.users.updateMany({
      where: {
        id: {
          in: userIds,
        },
        role: "JURI", // Pastikan hanya update yang benar-benar juri
      },
      data: {
        role: "USERS",
      },
    });
    const hapusPesertaLomba = await prisma.pesertalomba.deleteMany({
      where: {
        lomba_id: id,
      },
    });
    const hapusSertifikat = await prisma.sertifikat.deleteMany({
      where: {
        lomba_id: id,
      },
    });
    const hapusData = await prisma.lomba.delete({
      where: {
        id: id,
      },
    });
    return c.json(
      {
        status: "success",
        message: `Berhasil menghapus ${hapusData.nama} dari lomba`,
        data: {
          lomba: {
            nama: hapusData.nama,
            id: hapusData.id,
            jenis_lomba: hapusData.jenis_lomba,
          },
          juri_dihapus: hapusJuri.count,
          peserta_dihapus: hapusPesertaLomba.count,
          sertifikat_dihapus: hapusSertifikat.count,
          users_diupdate: updatedUsers.count,
        },
      },
      200
    );
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

export default daftarlomba;
