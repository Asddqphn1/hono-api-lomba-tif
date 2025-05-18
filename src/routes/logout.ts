import { Hono } from "hono";
import { deleteCookie } from "hono/cookie";
import { cors } from "hono/cors";

const logout = new Hono();

logout.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

logout.post("/", async (c) => {
  try {
    // Hapus cookie token
    deleteCookie(c, "token", {
      httpOnly: true, // Sesuaikan dengan domain Anda
      secure: false, // Set true jika menggunakan HTTPS
      sameSite: "strict",
    });

    return c.json(
      {
        status: "success",
        message: "Logout successful",
      },
      200
    );
  } catch (error) {
    return c.json(
      {
        status: "error",
        message: "Failed to logout",
      },
      500
    );
  }
});

export default logout;
