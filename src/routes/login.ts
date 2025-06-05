import { Hono } from "hono";
import * as bcrypt from "bcryptjs";
import  jwt from "jsonwebtoken"; // Correct import for jwt

import prisma from "../db.js";
import { cors } from "hono/cors";
import * as EmailValidator from "email-validator";
import { setCookie } from "hono/cookie";

const login = new Hono();

login.use(
  "*",
  cors({
    origin: [
      "http://localhost:5173",
      "https://lomba-tif.vercel.app",
      "https://www.lomba-tif.my.id",
    ],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

login.post("/", async (c) => {
  const { email, password } = await c.req.json();
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

  if (!email || !password) {
    return c.json(
      {
        status: "error",
        message: "Username and password are required",
      },
      400
    );
  }

  try {
    const user = await prisma.users.findUnique({
      where: { email: email },
    });

    if (!user) {
      return c.json(
        {
          status: "error",
          message: "User not found",
        },
        401
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return c.json(
        {
          status: "error",
          message: "Invalid password",
        },
        401
      );
    }

    const secret = process.env.ACCESS_TOKEN_SECRET; // Fixed typo (secreet -> secret)
    if (!secret) {
      return c.json(
        {
          status: "error",
          message: "Secret key is missing",
        },
        401
      );
    }

    const payload = {
      id: user.id,
      email: user.email,
      nama: user.nama,
      role: user.role,
    };

    const token = jwt.sign(payload, secret, { expiresIn: "1h" }); // Add expiration to token

    setCookie(c, "token", token, {
      httpOnly: true,
      secure: true, // Set to true if using HTTPS
      sameSite: "None",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return c.json(
      {
        status: "success",
        message: "Login successful",
        data: {
          id: user.id,
          nama: user.nama,
          email: user.email,
        },
        token: token,
      },
      200
    );
  } catch (error) {
    console.error(error);
    return c.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error", // Proper error handling
      },
      500
    );
  }
});

export default login;
