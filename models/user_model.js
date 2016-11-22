const pg           = require('pg-promise')({});
const bcrypt       = require('bcryptjs');

const SALTROUNDS = 10;

module.exports = {

 createUser(req, res, next) {
// check if username is already in db
  let uname = req.body.name;
  let encryption = bcrypt.hashSync(req.body.password, SALTROUNDS);
  console.log(encryption)
   db.any(`INSERT INTO users
    (name, password) VALUES ($1, $2);,
    [req.body.name, encryption]
    WHERE NOT EXISTS (SELECT 1
    FROM users
    WHERE users.name = uname`);
    next();
   .catch(error => next(error));
  }

  getUserById(id) {
    let id = req.params.id;
    db.any(`SELECT * FROM users WHERE users.u_id = id`);
    next();
    .catch(error => next(error));
  }

}
