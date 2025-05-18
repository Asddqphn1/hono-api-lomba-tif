import { Hono } from "hono";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { setCookie } from "hono/cookie"
import prisma from "../db";
import { cors } from "hono/cors";
import * as EmailValidator from "email-validator";
const login = new Hono();

login.use("*", cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true
}));
login.post("/", async (c) => {
    const { email, password } = await c.req.json();
    const emailValid = EmailValidator.validate(email);
    if (!emailValid) {
        return c.json({
            status: "error",
            message: "Invalid email format",
        }, 400);
    }
    if (!email || !password ) {
        return c.json({
            status: 'error',
            message: 'username and password are required',
        }, 400)
    }
    try {
        const user = await prisma.users.findUnique({
            where: { email: email },
        });
        if (!user) {
            return c.json({
                status: "error",
                message: "User not found",
            }, 401);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return c.json({
                status: "error",
                message: "Invalid password",
            }, 401);
        }
        const secreet = Bun.env.ACCESS_TOKEN_SECRET;
        if (!secreet) {
            return c.json({
                status: "error",
                message: "Secret key is missing"
            }, 401)
        }
        const payload = {
            id: user.id,
            email: user.email,
            nama: user.nama,
            role: user.role
        };
        const token = jwt.sign(payload, secreet);
        setCookie(c, "token", token, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            sameSite: "strict",
            maxAge: 60 * 60 * 24,
            
        });
        return c.json({
            status: "success",
            message: "Login successful",
            data: {
                id: user.id,
                nama: user.nama,
                email: user.email,
                
            },
            token: token,
        }, 200);

    } catch (error) {
        return c.json({
            status: "error",
            message: error,
        }, 500);
    }
})

export default login
