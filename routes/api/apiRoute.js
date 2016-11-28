// http://localhost:3000/api
const apiRouter = require('express').Router();
const { searchVideos } = require('../../services/videos');
const { searchEvents } = require('../../services/events');
const { likeVideo, removeLikedVideo } = require('../../models/youtube');
const auth = require('../../lib/auth');

apiRouter.post('/authenticate/:userid', auth.createToken)

apiRouter.route('/event/:event/:lat/:long')
.get(searchEvents, (req, res) => res.json(res.rows));

apiRouter.route('/video/:video')
.get(searchVideos, (req, res) => res.json(res.videos));

apiRouter.post('/like/:id', likeVideo, (req, res) => {
  console.log(req.params.id)
  res.json({message: 'Success'});
});

apiRouter.delete('/:id', removeLikedVideo, (req, res) => {
 res.json({message: 'Successfully Deleted'});
});

module.exports = apiRouter;
