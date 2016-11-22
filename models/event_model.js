const pg = require('pg-promise')({});
const db = require('../db/db.js');

module.exports = {

 getEvent(req, res, next) {
   db.any('SELECT * FROM events LEFT JOIN on USERS WHERE user.u_id = events.id')
   .then((eData) => {
     res.rows = eData;
     next();
   })
   .catch(error => next(error));
 },

 saveEvent(req, res, next) {
  db.none(`INSERT INTO events (tm_id, url) VALUES ($1, $2);`, [req.body.tm_id, req.body.url])
  .then((event) => {
    res.event = event;
    next();
  })
    .catch(error => next(error));
  },

  updateEvent(req, res, next) {
    db.none(`UPDATE event SET comments = $1;`, [req.body.comments])
    .then(next())
    .catch(error => next(error));
  },

  deleteEvent(req, res, next) {
    db.none(`DELETE FROM events WHERE id = $1;`, [req.params.id])
    .then(next())
    .catch(error => next(error));
  }

}

