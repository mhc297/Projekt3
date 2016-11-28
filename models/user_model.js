const bcrypt       = require('bcryptjs');
const db             = require('../db/db');
const salt  = bcrypt.genSaltSync(10);

const createPass = (password) =>
  new Promise( (resolve, reject) =>
  bcrypt.genSalt( (err, salt) =>
  bcrypt.hash(password, salt, (err, hash) =>
    err ? reject(err) : resolve(hash)
    )
  )
)

function createUser(newuser) {
  fetch(`/register/newuser`)
  createPass(req.body.password).then(hash=> {
  db.one(`INSERT INTO users (name, password)
    VALUES ($1, $2) returning * ;` [req.body.name, req.body.password])
   .then(data => {
    this.setState.user(data.userid)
     next();
    })
   .catch(error => next(error));
 });
}

 function verifyName(req, res, next) {
  console.log(req.body)
  let uname = req.body.name;
   db.one(`IF EXISTS SELECT 1 FROM users WHERE name = uname LIMIT 1`)
    .then(() => {
    next();
   })
    .catch(error => next(error));
  };

  function verifyPass(req, res, next) {
    let pword = req.body.password
    let encryption = bcrypt.hashSync(password, SALTROUNDS)
      db.one(`SELECT * FROM users WHERE password = encryption`)
      .then((password => {
        if(bcrypt.compareSync(req.body.password, user.pword)) {
        res.user = user;
      } else {
        res.error = true;
      }
      next();
   }))
    .catch(error => next(error));
  };


 function getUserById(req, res, next) {
   let id = req.params.id;
   db.any(`SELECT * FROM users WHERE userid = id`)
    .then((user => {
      if(bcrypt.compareSync(req.body.password, user.pword)) {
        res.user = user;
      } else {
        res.error = true;
      }
    next();
   }))
  .catch(error => next(error));
 };

 function getUserByUsername() {
  let uname = req.params.name;
  db.any(`SELECT * FROM users WHERE name = uname`)
    .then(() => {
    next();
 })
  .catch(error => next(error));
};

// function loginUser(user){
//   return fetch(`/api/authenticate/:id`, {
//     method: 'POST',
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     },
//     body : JSON.stringify({
//       email: user.email,
//       password: user.password_digest})
//     }).then(res=>{
//     return res.json()
//     }).then( res=> {
//       console.log(res)
//       localStorage.setItem('token', res.token)
//       localStorage.setItem('user', res.user)
//       return(res)
//   })
// }

module.exports = {
  getUserByUsername,
  getUserById,
  verifyPass,
  verifyName,
  createUser
}
