import { Hono } from "hono";
import { cors } from "hono/cors";
import authmiddleware from "../middleware/authmiddleware";
import authadmin from "../middleware/authadmin";
import prisma from "../db";
import authpeserta from "../middleware/authpeserta";

const sertifikat = new Hono();

sertifikat.use(
    "*",
    cors({
        origin: "http://localhost:5173",
        allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowHeaders: ["Authorization", "Content-Type"],
        credentials: true,
    })
);

sertifikat.post("/:idLomba", authmiddleware, authadmin, async (c) => {
    try {
      const idLomba = c.req.param("idLomba");
      const { url } = await c.req.json();

      // Validasi input
      if (!url) {
        return c.json(
          {
            status: "error",
            message: "URL tidak boleh kosong",
          },
          400
        );
      }
      // Cek lomba
      const existLomba = await prisma.lomba.findUnique({
        where: { id: idLomba },
      });

      if (!existLomba) {
        return c.json(
          {
            status: "error",
            message: "Tidak ada Lomba dengan kode tersebut",
          },
          404
        );
      }

      // Cek sertifikat existing
      const existSertifikat = await prisma.sertifikat.findFirst({
        where: { lomba_id: idLomba },
      });

      if (existSertifikat) {
        return c.json(
          {
            status: "error",
            message: "Sertifikat sudah ada",
          },
          409
        ); // 409 Conflict lebih tepat
      }

      // Create sertifikat
      const postSertifikat = await prisma.sertifikat.create({
        data: { lomba_id: idLomba, url },
      });

      return c.json({
        status: "success",
        message: "Sertifikat berhasil diupload",
        data: postSertifikat,
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
})

sertifikat.get("/sertifikat/:idLomba", authmiddleware, authpeserta, async (c) => {
    try{
        const idLomba = c.req.param("idLomba")
        const sertifikat = await prisma.sertifikat.findFirst({
            where : {
                lomba_id : idLomba
            }
        })
        if(!sertifikat){
            return c.json({
                status : "error",
                message : "Tidak ada sertifikat untuk lomba tersebut"
            },404)
        }
        return c.json({
            status: "success",
            message: "Berhasil ambil sertifikat",
            data: sertifikat
        })

    }catch(err){
        return c.json({
            status: "error",
            message: err
        })
    }
})

export default sertifikat
