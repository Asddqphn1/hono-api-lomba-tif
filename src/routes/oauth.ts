import { Hono } from "hono";
import { OAuth2Client } from "google-auth-library";
import { cors } from "hono/cors";
import prisma from "../db.js";
import jwt from "jsonwebtoken";
import { setCookie } from "hono/cookie";

// Fungsi untuk membersihkan karakter non-ASCII
const sanitizeString = (str: string): string => {
  return (
    str
      .normalize("NFKD") // Normalisasi karakter Unicode
      .replace(/[^\x00-\x7F]/g, "") // Hapus karakter di luar ASCII
      .trim() || "User"
  ); // Fallback jika string kosong
};

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
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
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
    // Validasi environment variables
    if (
      !process.env.GOOGLE_CLIENT_ID ||
      !process.env.GOOGLE_CLIENT_SECRET ||
      !process.env.ACCESS_TOKEN_SECRET
    ) {
      console.error("Missing required environment variables");
      return c.json({ error: "Server configuration error" }, 500);
    }

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
    const googlePayload = ticket.getPayload();

    if (!googlePayload?.email) {
      console.error("No email found in Google payload");
      return c.json({ error: "No email found" }, 400);
    }

    // Bersihkan nama dari karakter non-ASCII
    const sanitizedName = sanitizeString(googlePayload.name || "User");

    // Cek atau buat user di database
    let user = await prisma.users.findUnique({
      where: { email: googlePayload.email },
    });

    if (!user) {
      user = await prisma.users.create({
        data: {
          email: googlePayload.email,
          nama: sanitizedName,
          password: "", // Password kosong untuk OAuth
          role: "USERS",
        },
      });
    }

    // Buat payload untuk JWT
    const payload = {
      id: user.id,
      userId: user.id, // Tambah userId untuk kompatibilitas
      email: user.email,
      nama: user.nama,
      role: user.role,
    };

    // Buat JWT token
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    // Validasi token sebelum set cookie
    try {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (err) {
      console.error("Invalid JWT generated:", err);
      return c.json({ error: "Failed to generate valid token" }, 500);
    }

    // Set cookie dengan penanganan error
    try {
      setCookie(c, "token", token, {
        httpOnly: true,
        secure: true, // Set to true if using HTTPS
        sameSite: "None",
        maxAge: 60 * 60 * 24, // 1 day
      });
    } catch (err) {
      console.error("Failed to set cookie:", err);
      return c.json({ error: "Failed to set authentication cookie" }, 500);
    }

    // Redirect berdasarkan role
    let redirectUrl: string;
    switch (user.role) {
      case "USERS":
        redirectUrl = "https://www.lomba-tif.my.id/daftarlomba";
        break;
      case "PESERTA":
        redirectUrl = `https://www.lomba-tif.my.id/pesertadashboard/${user.id}`;
        break;
      case "JURI":
        redirectUrl = "https://www.lomba-tif.my.id/juridashboard/";
      default:
        console.warn(`Unknown role: ${user.role}`);
        redirectUrl = "https://www.lomba-tif.my.id?auth=success"; // Fallback
        break;
    }

    return c.redirect(redirectUrl);
  } catch (error) {
    console.error("Google OAuth error:", error);
    return c.json(
      { error: "Authentication failed", details: error },
      500
    );
  }
});

export default oauth;
