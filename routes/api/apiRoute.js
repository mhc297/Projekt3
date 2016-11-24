// this route is localhost:3000/api
const apiRouter = require('express').Router();
// const sendJSONresponse = (req, res) => res.json(res.rows);

const { searchVideos } = require('../../services/videos');


apiRouter.route('/:event')
.get(searchVideos, (req, res) => res.json(res.videos));
// .get(searchEvents, sendJSONresponse);

module.exports = apiRouter;
