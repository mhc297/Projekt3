const bcrypt    = require('bcryptjs');
// const userModel = require('../models/user_model');

function logIn(req, res, next) {
  const userPayload = req.body.user;

  console.log(userPayload.password);
  userModel.getUserByUsername(userPayload.username).then((dbUser) => {
    const matches = bcrypt.compareSync(userPayload.password, dbUser.password);

    console.log(dbUser.password, matches);
    if (matches) {
      req.session.userId = dbUser._id;
      res.user = dbUser;
      next();
    } else {
      res.redirect('/');
    }
  });
}

function authenticate(req, res, next) {
  if (req.session.userId) {
    userModel.getUserById(req.session.userId).then((dbUser) => {
      res.user = dbUser;
      next();
    }).catch(() => {
      res.redirect('/login');
    });
  } else {
    res.redirect('/login');
  }
}

module.exports = {
  logIn,
  authenticate,
};

//janky auth stuff here

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

//protect /api routes with JWT
app.use('/api', expressJwt({secret: secret}));

app.use(express.json());
app.use(express.urlencoded());



function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

jwt.sign({
  exp: Math.floor(Date.now() / 1000) + (60 * 60)
  data: 'foobar'
}, 'secret');



