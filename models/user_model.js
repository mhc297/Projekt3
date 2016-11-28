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

function createUser(req, res, next) {
  createPass(req.body.password).then(hash=> {
  db.any(`INSERT INTO users (name, password)
    VALUES ($1, $2);` [req.body.name, req.body.password])
   .then(data => {
    res.rows = data
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

  // if bcrypt compareSync (req.body.password, userpaddword,digest
  //   res.user = user)
  //   else res.error = true

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

module.exports = {
  getUserByUsername,
  getUserById,
  verifyPass,
  verifyName,
  createUser,
}
