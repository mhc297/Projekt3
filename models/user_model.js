const pg           = require('pg-promise')({});
const bcrypt       = require('bcryptjs');

const SALTROUNDS = 10;

module.exports = {

 createUser(req, res, next) {
  let encryption = bcrypt.hashSync(req.body.password, SALTROUNDS);
   db.any(`INSERT INTO users (name, password) VALUES ($1, $2);`, [req.body.name, req.body.password])
    next();
   .catch(error => next(error));
  },

}
