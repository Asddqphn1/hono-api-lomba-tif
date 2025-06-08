import { Hono } from "hono";
import { OAuth2Client } from "google-auth-library";
import { cors } from "hono/cors";
import prisma from "../db.js";
import jwt from "jsonwebtoken";
import { setCookie, getCookie } from "hono/cookie";

const oauth = new Hono();

// Terapkan CORS
oauth.use(
  "*",
  cors({
    origin: [
      "http://localhost:5173",
      "https://lomba-tif.vercel.app",
      "https://www.lomba-tif.my.id",
    ],
    allowMethods: ["GET", "POST"],
    allowHeaders: ["Content-Type"],
    credentials: true,
  })
);

// Google OAuth Configuration
const googleClient = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri:
    "https://hono-api-lomba-tif-production.up.railway.app/auth/google/callback",
});

// Google OAuth Login
oauth.get("/auth/google", (c) => {
  const url = googleClient.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
    prompt: "select_account",
  });
  return c.redirect(url);
});

// Google OAuth Callback
oauth.get("/auth/google/callback", async (c) => {
  const code = c.req.query("code");
  if (!code) {
    console.error("No code provided in Google OAuth callback");
    return c.json({ error: "No code provided" }, 400);
  }

  try {
    // Dapatkan token dari Google
    const { tokens } = await googleClient.getToken(code);
    if (!tokens.id_token) {
      console.error("No id_token received from Google");
      return c.json({ error: "Invalid Google response" }, 400);
    }

    // Verifikasi id_token
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    if (!payload?.email) {
      console.error("No email found in Google payload");
      return c.json({ error: "No email found" }, 400);
    }

    // Cek atau buat user di database
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

    // Buat JWT token dengan struktur yang sesuai untuk frontend
    const token = jwt.sign(
      { id: user.id, userId: user.id, role: user.role, email: user.email }, // Tambah id untuk kompatibilitas
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "7d" }
    );

    // Set cookie dengan atribut yang lebih ketat
    setCookie(c, "token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Hanya secure di production
      sameSite: "Strict", // Cegah CSRF
      maxAge: 60 * 60 * 24 * 7, // 7 hari
      path: "/",
      domain:
        process.env.NODE_ENV === "production"
          ? ".lom譆lomba-tif.my.id"
          : undefined, // Gunakan domain di production
    });

    // Redirect ke frontend dengan parameter sukses
    return c.redirect("https://www.lomba-tif.my.id/daftarlomba?auth=success");
  } catch (error) {
    console.error("Google OAuth error:", error);
    return c.json(
      { error: "Authentication failed", details: error },
      500
    );
  }
});

export default oauth;
