import { Hono } from "hono";
import { cors } from "hono/cors";
import authmiddleware from "../middleware/authmiddleware";
import authpeserta from "../middleware/authpeserta";
import prisma from "../db";

const submit = new Hono();
submit.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

submit.post('/:id', authmiddleware, authpeserta, async (c) => {
  try{
    const idpeserta = c.req.param("id");
    const { url } = await c.req.json()
    const postsubmit = await prisma.submission.create({
      data : {
        pesertalomba_id : idpeserta,
        file_url : url

      }
    })

    return c.json({
      status : "succes",
      message : "berhasil submit",
      data : postsubmit
    }, 200)
  }catch(err){
    return c.json({
      status : "error",
      message : err
    }, 500)
  }
})

export default submit