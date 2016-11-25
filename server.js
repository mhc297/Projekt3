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
const expressJWT      = require ('express-jwt');
const jwt             = require('jsonwebtoken'); //(and this line maybe in auth.js too?)

const PORT            = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded <- no clue what this means just yet
app.use(bodyParser.urlencoded({ extended: true }));

// Parses application/JSON
app.use(bodyParser.json());

app.use(expressJWT({ secret: 'proyekt3'}).unless({ path: []}));
//protected path in array

// this reads cookies sent from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'PrOyEcTsEcReT',
}));


app.listen(PORT, () => { console.log('Ja zees app is listening, just like KGB')});

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public/landing.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/signup.html'));
});

app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/login', loginRouter);
app.use('/register', regRouter);
app.use('/profile', profileRouter);
