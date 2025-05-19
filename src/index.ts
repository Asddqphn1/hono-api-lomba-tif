import { Hono } from 'hono'
import register from './routes/register'
const app = new Hono()
import login from './routes/login';
import daftarlomba from './routes/daftarlomba';
import daftarpeserta from './routes/daftarpeserta';
import users from './routes/users';
import juri from './routes/juri';
import auth from './routes/auth';
import logout from './routes/logout';
import penilaian from './routes/penilaian';

app.route('/auth', auth)
app.route('/register', register)
app.route('/login', login)
app.route('/juri', juri)
app.route('/daftarlomba', daftarlomba)
app.route('/daftarpeserta', daftarpeserta)
app.route('/users', users)
app.route('/logout', logout)
app.route('/penilaian', penilaian)
// Di backend (Hono)

export default app
