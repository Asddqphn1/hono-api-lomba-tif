// src/routes/auth.ts
import { Hono } from "hono";
import { OAuth2Client } from "google-auth-library";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { setCookie, getCookie } from "hono/cookie";

const prisma = new PrismaClient();
const oauth = new Hono();

// Google OAuth Configuration
const googleClient = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: `${process.env.BASE_URL}/auth/google/callback`,
});


// Google OAuth
oauth.get("/auth/google", (c) => {
  const url = googleClient.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
    prompt: "select_account",
  });
  return c.redirect(url);
});

oauth.get("/auth/google/callback", async (c) => {
  const code = c.req.query("code");
  if (!code) return c.text("No code provided", 400);

  try {
    const { tokens } = await googleClient.getToken(code);
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    if (!payload?.email) return c.text("No email found", 400);

    // Cek atau buat user
    let user = await prisma.users.findUnique({
      where: { email: payload.email },
    });

    if (!user) {
      user = await prisma.users.create({
        data: {
          email: payload.email,
          nama: payload.name || "User",
          password: "", // Password kosong untuk OAuth
          role: "USERS",
        },
      });
    }

    // Buat JWT token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    setCookie(c, "token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 hari
      path: "/",
    });

    return c.redirect("/daftarlomba");
  } catch (error) {
    console.error("Google OAuth error:", error);
    return c.text("Authentication failed", 500);
  }
});

export default oauth;
