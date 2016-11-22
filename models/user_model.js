const pg = require('pg-promise')({});

const config = {
 host:       process.env.DB_HOST,
 port:       process.env.DB_PORT,
 database:   'projekt3',
 user:       process.env.DB_USER,
 password:   process.env.DB_PASS,
}

const db = pg(config);

module.exports = {

 getEvent(req, res, next) {
   db.any('SELECT * FROM events LEFT JOIN on SAVED WHERE user.u_id = saved.user_id')
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
  }

  updateEvent(req, res, next) {
    db.none(`UPDATE event SET comments = $1;`, [req.body.comments])
    .then(next())
    .catch(error => next(error));
  }

  deleteEvent(req, res, next) {
    db.none(`DELETE FROM events WHERE id = $1;`, [req.params.id])
    .then(next())
    .catch(error => next(error));
  }

}

