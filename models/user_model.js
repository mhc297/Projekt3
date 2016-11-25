const pg           = require('pg-promise')({});
const bcrypt       = require('bcryptjs');
let db             = require('../db/db');

const SALTROUNDS = 10;

module.exports = {

createUser(req, res, next) {
// check if username is already in db
 let uname = req.body.name;
 let encryption = bcrypt.hashSync(req.body.password, SALTROUNDS);
  db.one(`INSERT INTO users
   (name, password) VALUES ($1, $2);,
   [req.body.name, encryption]
   WHERE NOT EXISTS (SELECT 1
   FROM users
   WHERE users.name = uname;`
   , [req.body.name, req.body.password])
   .then(() => {
     next();
     .catch(error => next(error));
   })
 }

 verifyName(req, res, next) {
  let uname = req.body.name;
   db.one(`IF EXISTS SELECT 1 FROM users WHERE users.name = uname LIMIT 1`)
    .then(() => {
    next();
    .catch(error => next(error));
   })
  }

  verifyPass(req, res, next) {
    let pword = req.body.password
    let encryption = bcrypt.hashSync(pword, SALTROUNDS)


      db.one(`IF EXISTS SELECT 1 FROM users WHERE users.password = encryption LIMIT 1`)
      .then(() => {
      next();
      .catch(error => next(error));
   })
  }

 getUserById(id) {
   let id = req.params.id;
   db.any(`SELECT * FROM users WHERE users.u_id = id`);
    .then(() => {
    next();
    .catch(error => next(error));
   })
 }

 getUserByUsername(name) {
  let name = req.params.name;
  db.any(`SELECT * FROM users WHERE users.name = name`);
  next();
  .catch(error => next(error));
 }

}
