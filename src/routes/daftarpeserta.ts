import { Hono } from "hono";
import prisma from "../db";
import { cors } from "hono/cors";
import authmiddleware from "../middleware/authmiddleware";
import authadmin from "../middleware/authadmin";
import { Jenis_lomba } from "../generated/prisma";
import authpeserta from "../middleware/authpeserta";


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
  try {
    const { jenis } = c.req.query();

    // Filter dasar
    const baseFilter = {
      pesertalomba: {
        some: {}, // Pastikan hanya peserta dengan setidaknya 1 lomba
      },
    };

    // Tambahkan filter jenis jika ada
    const jenisFilter = jenis
      ? {
          pesertalomba: {
            some: {
              lomba: {
                jenis_lomba: jenis as Jenis_lomba,
              },
            },
          },
        }
      : {};

    const daftarpeserta = await prisma.peserta.findMany({
      where: {
        ...baseFilter,
        ...jenisFilter,
      },
      select: {
        nama: true,
        id: true,
        users_id: true,
        created_at: true,
        pesertalomba: {
          where: {
            lomba: {
              // Pastikan relasi lomba masih ada
              id: { not: undefined },
            },
          },
          select: {
            lomba_id: true,
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

    // Filter tambahan untuk memastikan data konsisten
    const filteredPeserta = daftarpeserta.filter(
      (peserta) => peserta.pesertalomba.length > 0
    );

    return c.json({
      status: "Success",
      message: "Berhasil ambil data Peserta",
      data: filteredPeserta,
    });
  } catch (error) {
    console.error("Error fetching peserta:", error);
    return c.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "Internal server error",
      },
      500
    );
  }
});

daftarpeserta.post("/:id/:idLomba", authmiddleware, async (c) => {
  try {
    const { nama } = await c.req.json();
    const idpeserta = c.req.param("id");
    const idlomba = c.req.param("idLomba");

    // Check if user already registered for this competition
    const existingRegistration = await prisma.pesertalomba.findFirst({
      where: {
        lomba_id: idlomba,
        peserta: {
          users_id: idpeserta,
        },
      },
      include: {
        peserta: true,
      },
    });

    if (existingRegistration) {
      return c.json(
        {
          status: "Gagal",
          message: `Anda sudah terdaftar di lomba ini sebagai ${existingRegistration.peserta.nama}`,
        },
        400
      );
    }

    // Get competition details including type and team size limit
    const tipelomba = await prisma.lomba.findUnique({
      where: { id: idlomba },
      select: {
        jenis_lomba: true,
        jumlah_tim: true,
      },
    });

    if (!tipelomba) {
      return c.json(
        {
          status: "error",
          message: "Lomba tidak ditemukan",
        },
        404
      );
    }

    if (tipelomba.jenis_lomba === "TIM") {
      try {
        const { nama_anggota } = await c.req.json();

        // Validate team members input
        if (!nama_anggota) {
          return c.json(
            {
              status: "error",
              message: "Masukkan nama anggota tim",
            },
            400
          );
        }

        // Check if number of team members exceeds the limit
        if (
          tipelomba.jumlah_tim === null ||
          tipelomba.jumlah_tim === undefined
        ) {
          return c.json(
            {
              status: "error",
              message: "Data jumlah tim tidak tersedia untuk lomba ini",
            },
            400
          );
        }
        if (nama_anggota.length > tipelomba.jumlah_tim) {
          return c.json(
            {
              status: "error",
              message: `Jumlah anggota tim melebihi batas maksimal (${tipelomba.jumlah_tim} orang)`,
            },
            400
          );
        }

        // Create the main participant
        const result = await prisma.peserta.create({
          data: {
            users_id: idpeserta,
            nama: nama,
          },
        });

        // Link participant to competition
        await prisma.pesertalomba.create({
          data: {
            lomba_id: idlomba,
            peserta_id: result.id,
          },
        });

        // Add team members one by one
        for (let anggota of nama_anggota) {
          await prisma.anggotaTim.create({
            data: {
              peserta_id: result.id,
              nama: anggota,
            },
          });
        }

        await prisma.users.update({
          where: { id: idpeserta },
          data: { role: "PESERTA" },
        });

        return c.json({
          status: "success",
          message: "Peserta tim berhasil ditambahkan",
          data: result,
        });
      } catch (error) {
        return c.json(
          {
            status: "error",
            message:
              error instanceof Error ? error.message : "Terjadi kesalahan",
          },
          400
        );
      }
    } else {
      // For individual competition
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

      await prisma.users.update({
        where: { id: idpeserta },
        data: { role: "PESERTA" },
      });

      return c.json({
        status: "success",
        message: "Peserta individu berhasil ditambahkan",
        data: result,
      });
    }
  } catch (error) {
    return c.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "Terjadi kesalahan server",
      },
      500
    );
  }
});
daftarpeserta.get("/anggotatim/:id", authadmin, authmiddleware, async (c) => {
  try {
    const idTim = c.req.param("id")
    const nama_anggota = await prisma.peserta.findUnique({
      where :{
        id : idTim
      },
      select: {
        nama: true,
        id : true,
        pesertalomba: {
          select: {
            lomba: {
              select: {
                nama: true,
              },
            },
          },
        },
        anggotaTim: {
          select: {
            nama: true,
          },
        },
      },
    });

    return c.json({
      status: "success",
      message: "Berhasil ambil data anggota tim",
      data: nama_anggota,
    });
  } catch (error) {
    return c.json({
      status: "error",
      message: error,
    });
  }
});

export default daftarpeserta;
