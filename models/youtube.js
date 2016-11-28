const db = require('../db/db.js');

function getAllVids(req, res, next) {
  db.any('SELECT * from likes;')
    .then((likes) => {
      res.likes = likes;
      next();
    })
    .catch(error => next(error));
}

function likeVideo(req, res, next) {
   db.none('INSERT INTO  likes(name) VALUES($1);',[req.body.videoId])
   .then((like) => {
     res.likes = likes;
     next();
   })
   .catch(error => next(error));
 }

function removeLikedVideo(req, res, next) {
 db.none(`DELETE FROM likes WHERE id = $1;`, [req.params.id])
   .then(next())
   .catch(err => next(err));
}

module.exports = { getAllVids, likeVideo, removeLikedVideo };
