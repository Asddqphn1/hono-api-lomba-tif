import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import auth from "./routes/auth";
import daftarlomba from "./routes/daftarlomba";
import daftarpeserta from "./routes/daftarpeserta";
import juri from "./routes/juri";
import login from "./routes/login";
import logout from "./routes/logout";
import penilaian from "./routes/penilaian";
import register from "./routes/register";
import sertifikat from "./routes/sertifikat";
import submit from "./routes/submit";
import users from "./routes/users";
import { server } from 'typescript';
const app = new Hono()


app.route('/auth', auth)
app.route('/register', register)
app.route('/login', login)
app.route('/juri', juri)
app.route('/daftarlomba', daftarlomba)
app.route('/daftarpeserta', daftarpeserta)
app.route('/submit', submit)
app.route('/users', users)
app.route('/logout', logout)
app.route('/penilaian', penilaian)
app.route('/sertifikat', sertifikat)


const PORT = Number(process.env.PORT) || 3000

serve({
    fetch: app.fetch,
    port: PORT,
}, () => {
    console.log(`Server running on port ${PORT}`)
})
// Di backend (Hono)

export default app
