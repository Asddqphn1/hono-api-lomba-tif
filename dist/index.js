import { Hono } from "hono";
import auth from "./routes/auth";
import register from "./routes/register";
import login from "./routes/login";
import juri from "./routes/juri";
import daftarlomba from "./routes/daftarlomba";
import daftarpeserta from "./routes/daftarpeserta";
import submit from "./routes/submit";
import users from "./routes/users";
import logout from "./routes/logout";
import penilaian from "./routes/penilaian";
import sertifikat from "./routes/sertifikat";

const app = new Hono();

app.route("/auth", auth);
app.route("/register", register);
app.route("/login", login);
app.route("/juri", juri);
app.route("/daftarlomba", daftarlomba);
app.route("/daftarpeserta", daftarpeserta);
app.route("/submit", submit);
app.route("/users", users);
app.route("/logout", logout);
app.route("/penilaian", penilaian);
app.route("/sertifikat", sertifikat);

// Ekspor aplikasi untuk digunakan di server
export default app;
