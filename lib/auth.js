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

function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

module.exports ={

  createToken(req, res, next){
    const {user_name, user_id}=res.user
    const token = jwt.sign({user_name, user_id}), 'secret', {
      expiresIn: 30
    });
    return res.json({
      success: ture,
      message: 'Token issued',
      token, token,
      user: res.user.user_id
    });
  },

  validateToken

}


