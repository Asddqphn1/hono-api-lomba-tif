import { Hono } from "hono";
import { getCookie } from "hono/cookie";
import { cors } from "hono/cors";
import * as jwt from "jsonwebtoken";


const auth = new Hono()

auth.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);

auth.get("/me", async (c) => {
  const token = getCookie(c, "token"); // Baca cookie httpOnly
  
  if (!token) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const decoded = jwt.verify(token, Bun.env.ACCESS_TOKEN_SECRET!);
    return c.json({ user: decoded });
  } catch (error) {
    return c.json({ error: "Invalid token" }, 401);
  }
});

export default auth
