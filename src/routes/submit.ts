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

