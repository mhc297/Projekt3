// this route will be something like: http://localhost:3000/events
const apiRouter = require('express').Router();
const { searchEvents } = require('../../services/events');
const { searchVideos } = require('../../services/videos');

apiRouter.get('/:event', searchEvents, searchVideos, (req, res) => {
  res.json(res.rows);
});

<<<<<<< HEAD
module.exports = apiRouter;

=======
module.exports = apiRouter
>>>>>>> 643992bb060af930260004b4eb8622265635e5c0
