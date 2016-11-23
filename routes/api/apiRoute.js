// this route will be something like: http://localhost:3000/events
const apiRouter = require('express').Router();
const sendJSONresp = (req, res) => res.json(res.videos);
const sendJSONresponse = (req, res) => res.json(res.rows);
const { searchEvents } = require('../../services/events');
const { searchVideos } = require('../../services/videos');


apiRouter.get('/:event')
.get(searchVideos, sendJsonresp)
.get(searchEvents, sendJSONresponse);

module.exports = apiRouter;
