// http://localhost:3000/api
const apiRouter = require('express').Router();
const { searchVideos } = require('../../services/videos');
const { searchEvents } = require('../../services/events');

apiRouter.route('/event/:event/:lat/:long')
.get(searchEvents, (req, res) => res.json(res.rows));

apiRouter.route('/video/:video')
.get(searchVideos, (req, res) => res.json(res.videos))

module.exports = apiRouter;
