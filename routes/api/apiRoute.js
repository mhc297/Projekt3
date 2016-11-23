// http://localhost:3000/api
const apiRouter = require('express').Router();
// const { searchVideos } = require('../../services/videos');
const { searchEvents } = require('../../services/events');


apiRouter.route('/:event')
// .get(searchVideos, (req, res) => res.json(res.videos))
.get(searchEvents, (req, res) => res.json(res.rows));

module.exports = apiRouter;
