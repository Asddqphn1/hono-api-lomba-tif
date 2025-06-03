import { Hono } from 'hono'
const app = new Hono()
import login from './routes/login';

import daftarpeserta from './routes/daftarpeserta';
import users from './routes/users';
import juri from './routes/juri';
import auth from './routes/auth';
import logout from './routes/logout';
import penilaian from './routes/penilaian';
import submit from './routes/submit';
import sertifikat from './routes/sertifikat';
import register from 'routes/register';
import daftarlomba from 'routes/daftarlomba';

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
// Di backend (Hono)

export default app
