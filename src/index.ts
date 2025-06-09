import { serve } from '@hono/node-server'
import { Hono } from 'hono'


import auth from './routes/auth.js';
import register from './routes/register.js';
import juri from './routes/juri.js';
import daftarlomba from './routes/daftarlomba.js';
import daftarpeserta from './routes/daftarpeserta.js';
import submit from './routes/submit.js';
import users from './routes/users.js';
import logout from './routes/logout.js';
import penilaian from './routes/penilaian.js';
import sertifikat from './routes/sertifikat.js';
import login from './routes/login.js';
import oauth from './routes/oauth.js';

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
app.route('/', oauth)
app.get('/', (c) => {
    return c.json({
        status: "success",
        message: "WELCOME TO LOMBATIF API 🚀🚀",
    }, 200)
})


const PORT = Number(process.env.PORT) || 3000

serve({
    fetch: app.fetch,
    port: PORT,
}, () => {
    console.log(`Server running on port ${PORT}`)
})
// Di backend (Hono)

export default app
