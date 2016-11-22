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
   })

 }

 getUserById(id) {
   let id = req.params.id;
   db.any(`SELECT * FROM users WHERE users.u_id = id`);
   next();
   .catch(error => next(error));
 }

}
