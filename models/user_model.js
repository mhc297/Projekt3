const pg           = require('pg-promise');
const bcrypt       = require('bcryptjs');
let db             = require('../db/db');

const salt = bcrypt.genSaltSync(10);

const createPass = (password) =>
new Promise ((resolve, reject) =>
bcrypt.genSalt((err, salt)=>
bcrypt.hash(password, salt, (err, hash) =>
err ? reject(err) : resolve(hash)
    )
  )
)

function createUser(err, req, res, next) {
  console.log('Begin Creation');
 let uname = req.body;
 let encryption = bcrypt.hashSync(req.body.password, salt);
 console.log(uname, encryption)
 if (err){console.log(err)}
  db.none(`INSERT INTO USERS (id, name, password) VALUES (4, $1, $2);` [req.body.name, req.body.password])
   .then(data => {
     res.rows = data;
     next();
    })
   .catch(error => next(error));
 };

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
