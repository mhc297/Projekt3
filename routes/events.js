// this route will be something like: http://localhost:3000/events
const apiRouter = require('express').Router();
const { searchEvents } = require('../services/events');

apiRouter.get('/:event', searchMovie, (req, res) => {
  res.json(res.rows);
});

module.exports = apiRouter


(req, res) => {

}
