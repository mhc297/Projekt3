'use strict'
require('dotenv').config({ silent: true });
const session         = require('express-session');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const app             = express();
const authRouter      = require('./routes/auth/auth.js');
const loginRouter     = require('./routes/login/login.js');
const apiRouter       = require('./routes/api/apiRoute.js');
const profileRouter   = require('./routes/profile/profile.js');
const regRouter       = require('./routes/register/register.js');
const landingRouter   = require('./routes/landing/landing.js');
const expressJWT      = require ('express-jwt');
const jwt             = require('jsonwebtoken'); //(and this line maybe in auth.js too?)

const PORT            = process.argv[2] || process.env.port || 3000;
const secret          = 10;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

// Parses application/JSON
app.use(bodyParser.json());

app.use(expressJWT({ secret: secret}).unless({ path: ['/login', '/register', '/landing']}));

// protected path in array

// this reads cookies sent from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: secret,
}));


app.listen(PORT, () => { console.log('Ja zees app is listening, just like KGB')});

app.get('/landing', (req, res) => {
 res.sendFile(path.join(__dirname, 'public/landing.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/register.html'));
});

app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/login', loginRouter);
app.use('/register', regRouter);
app.use('/landing', landingRouter);
app.use('/profile', profileRouter);
