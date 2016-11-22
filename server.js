'use strict'
require('dotenv').config({ silent: true });
const session         = require('express-session');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const app             = express();
<<<<<<< HEAD
const apiRouter        = require('./routes/api/apiRoute.js');
=======
>>>>>>> 643992bb060af930260004b4eb8622265635e5c0
const authRouter      = require('./routes/auth/auth.js');
const loginRouter     = require('./routes/login/login.js');
const apiRoute        = require('./routes/api/apiRoute.js');
const profileRouter   = require('./routes/profile/profile.js');
const regRouter       = require('./routes/register/register.js');

const PORT            = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded <- no clue what this means just yet
app.use(bodyParser.urlencoded({ extended: true }));

// Parses application/JSON
app.use(bodyParser.json());

// this reads cookies sent from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'PrOyEcTsEcReT',
}));


app.listen(PORT, () => { console.log('Ja zees app is listening, just like KGB')});

app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/login', loginRouter);
app.use('/register', regRouter);
app.use('/profile', profileRouter);
