'use strict'
require('dotenv').config({ silent: true });
const bodyParser      = require('body-parser');
const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const app             = express();
const apiRoute        = require('./routes/api/apiRoute.js');
const authRouter      = require('./routes/auth/auth.js');
const loginRouter     = require('./routes/login/login.js');
const profileRouter   = require('./routes/profile/profile.js');
const regRouter       = require('./routes/register/register.js');

const PORT            = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => { console.log('Ja zees app is listening, just like KGB')});

app.use('/api', apiRoute);
app.use('/auth', authRouter);
app.use('/login', loginRouter);
app.use('/register', regRouter);
app.use('/profile', profileRouter);
