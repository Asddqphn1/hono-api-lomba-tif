import { Hono } from "hono";
import { cors } from "hono/cors";
import authadmin from "../middleware/authadmin";
import authmiddleware from "../middleware/authmiddleware";
import prisma from "../db";

const users = new Hono();

users.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

users.get("/", authadmin, authmiddleware, async (c) => {
  try {
    const data = await prisma.users.findMany({
      select: {
        id: true,
        nama: true,
        email: true,
        role: true,
      },
      orderBy: {
        nama: "asc",
      },
    });
    return c.json({
        status : "succes",
        message : "data user berhasil diambil",
        data : data
    },200)
  } catch (error) {
    console.log("gagal ambil data user", error)
    return c.json({
        status : "Gagal ambil data user",
        message : error
    })
  }
});

export default users
