// const pg           = require('pg-promise');
const bcrypt       = require('bcryptjs');
let db             = require('../db/db');

const SECRET = 10;

function createUser(req, res, next) {
  console.log('create user line 8');
 let uname = req.body.name;
 console.log(uname)
 let encryption = bcrypt.hashSync(req.body.password, SECRET);
 console.log(encryption)
  db.any(`INSERT INTO users (name, password)
    VALUES ($1, $2);` [uname, req.body.password])
   .then(() => {
     next();
    })
   .catch(error => next(error));
 };

 function verifyName(req, res, next) {
  console.log(req.body)
  let uname = req.body.name;
   db.one(`IF EXISTS SELECT 1 FROM users WHERE users.name = uname LIMIT 1`)
    .then(() => {
    next();
   })
    .catch(error => next(error));
  };

  function verifyPass(req, res, next) {
    let pword = req.body.password
    let encryption = bcrypt.hashSync(pword, SALTROUNDS)
      db.one(`IF EXISTS SELECT 1 FROM users WHERE password = encryption LIMIT 1`)
      .then(() => {
      next();
   })
    .catch(error => next(error));
  };

 function getUserById() {
   let id = req.params.id;
   db.any(`SELECT * FROM users WHERE u_id = id`)
    .then(() => {
    next();
   })
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

module.exports = {
  getUserByUsername,
  getUserById,
  verifyPass,
  verifyName,
  createUser,
}
