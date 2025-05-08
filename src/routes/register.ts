import { Hono } from "hono";
import prisma from "../db";
import { cors } from "hono/cors";
import * as bcrypt from "bcryptjs";
import * as EmailValidator from "email-validator";
import authadmin from "../middleware/authadmin";
import authmiddleware from "../middleware/authmiddleware";

const register = new Hono();
register.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Authorization", "Content-Type"],
  })
);

register.post("/", async (c) => {
  const { nama, email, password } = await c.req.json();
  const emailValid = EmailValidator.validate(email);
  if (!emailValid) {
    return c.json(
      {
        status: "error",
        message: "Invalid email format",
      },
      400
    );
  }
  if (!nama || !password) {
    return c.json(
      {
        status: "error",
        message: "username and password are required",
      },
      400
    );
  }
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    let user;
    let admin;
    const existingUser = await prisma.users.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      return c.json(
        {
          status: "error",
          message: "Email already registered",
        },
        400
      );
    }
    if (email === "pohan@gmail.com") {
      user = await prisma.users.create({
        data: {
          email : email,
          password : hashPassword,
          nama : nama,
          role : "admin"
        },
      });
      admin = await prisma.admin.create({
        data: {
          users_id: user.id,
        },
      })
      return c.json(
        {
          status: "success",
          message: "User registered successfully",
          data: {
            id: user.id,
            nama: user.nama,
            email: user.email,
          },
        },
        201
      );
    } else {
      user = await prisma.users.create({
        data: {
          nama: nama,
          email: email,
          password: hashPassword,
          role: "user",
        },
      });
      return c.json(
        {
          status: "success",
          message: "User registered successfully",
          data: {
            id: user.id,
            nama: user.nama,
            email: user.email,
          },
        },
        201
      );
    }
  } catch (error) {
    console.error("Registration error:", error);
    return c.json(
      {
        status: "error",
        message: "Internal server error",
      },
      500
    );
  }
});

export default register;
