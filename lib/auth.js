const bcrypt    = require('bcryptjs');
let db          = require('../db/db');
const jwt       = require('jsonwebtoken');
const userModel = require('../models/user_model');
const SECRET = 'proyekt3';

function logIn(req, res, next) {
  const userPayload = req.body;
// first check if user exists
  userModel.verifyName(userPayload.name)
// then check if password matches
  userModel.verifyPass(userPayload.password)
  userModel.getUserByUsername(userPayload.name).then((dbUser) => {
    const matches = bcrypt.compareSync(userPw.password, dbUser.password);
// if both yes then create token and assign it to state. but how?
    if (matches) {
      createToken();
    } else {
      res.redirect('/');
// some kind of error alert?
    }
  });
}

  function createToken(req, req, next) {
// fire this after we confirm a user exists in logIn
   const {name, userid} = res.user
   const token = jwt.sign({name, u_id}, 'SECRET', {
     expiresIn: '1h'
// npm install --save ms to use the '1h' notation
    });
      return res.json({
      success: true,
      message: 'token!',
      token: token,
      user: res.name
    });
// somehow pass token to state.
  }

// courtesy JPinhas, no idea how this works
function authenticate (req, res, next) {
 const token = req.headers.token || req.params.token || req.body.token || req.query.token;
 return new Promise((resolve, reject) => {
   jwt.verify(token, SECRET, (err, decoded) => {
     if (err) return next(err);
     next();
   });
 });
}

module.exports = {
  logIn,
  createToken,
  authenticate
};

// previous authenticate function
//
// function authenticate(req, res, next) {
// not sure if req.session is a thing here
//   if (req.session.userId) {
//     userModel.verifyUser(req.session.userId).then((dbUser) => {
//       res.user = dbUser;
//       next();
//     }).catch(() => {
//       res.redirect('/login');
//     });
//   } else {
//     res.redirect('/login');
//   }
// }
//
//Janky auth stuff here
// sources: https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
// https://jwt.io/introduction/
// https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.igbxxfu4s
//
// Just about every explanation I've found uses some other libraries such as redux, flux, or
// react router.
// Not sure if it will be easier to to this with or without one of those as it involves
// adding/learning another library.
// In short, it seems like you npm install and require jsonwebtoken and use jwt.sign to create
// the token, which can get stored in state and passed around from there.
//
// this is Trevor's stuff that we can't steal directly. file called tokens.js in models.
//
// function getTokenFromHeader(req) {
//   if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//     return req.headers.authorization.split(' ')[1];
//   } else if (req.query && req.query.token) {
//     return req.query.token;
//   }
//   return null;
// }
//
//  module.exports={
//
// createToken(req,res,next){
//   console.log(res.user)
//   const {user_name, user_id}=res.user
//   console.log({user_name, user_id})
//   // we should be certain that a user exists by now (res.user)
//   const token = jwt.sign({user_name, user_id}, 'superSecret', {
//     expiresIn: 30 // expires in 24 hours
//   });

//   // return the information including token as JSON
//   return res.json({
//     success: true,
//     message: 'Enjoy your token!',
//     token: token,
//     user: res.user.user_id
//   });
// },
//
// validateToken(req,res,next){
//    const token = getTokenFromHeader(req)
//
//    // no token, die here
//    if (!token){
//      res.status(403).end()
//      return
//    }
//
//    // token
//    jwt.verify(token, 'superSecret', (err, decoded) =>{
//      // bad token
//      if (err) {
//        res.status(401).end()
//        return
//      }
//
//     // if everything is good, save to request for use in other routes
//      req.decoded = decoded;
//      next();
//      return;
//
//    })
// }
//
// End Trevor's stuff
