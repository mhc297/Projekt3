// authoriztaion using jwt generously provided by @trevorpreston and the sharebear project https://github.com/Share-Bear
const jwt       = require('jsonwebtoken');
let db          = require('../db/db');

function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
   } else if (req.query && req.query.token) {
    return req.query.token;
   }
   return null;
}

module.exports = {

  createToken(req, res, next) {
// fire this after we confirm a user exists in logIn
   const {name, userid} = res.user
   const token = jwt.sign({name, userid}, 'proyekt3', {
     expiresIn: '1h'
// npm install --save ms to use the '1h' notation
// if breaks just use 30
    });
      return res.json({
      success: true,
      message: 'have a token!',
      token: token,
      user: res.user.userid
    });
// somehow pass token to state? -- local storage
  },

  validateToken(req, res, next) {
    const token = getTokenFromHeader(req)

    if (!token) {
      res.status(403).end()
      return
    }
    jwt.verify(token, 'proyekt3', (err, decoded) => {
      if (err) {
        res.status(401).end()
        return
      }
      req.decoded = decoded;
      next();
      return;
    });
    return
  },

  logIn(req, res, next){
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

}

// courtesy JPinhas
// function authenticate (req, res, next) {
//  const token = req.headers.token || req.params.token || req.body.token || req.query.token;
//  return new Promise((resolve, reject) => {
//    jwt.verify(token, SECRET, (err, decoded) => {
//      if (err) return next(err);
//      next();
//    });
//  });
// }


