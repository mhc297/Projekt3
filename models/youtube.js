const db = require('../db/db.js');

function likeVideo(req, res, next) {
 // Implement adopting a puppy
   db.none('INSERT INTO  likes(name, url) VALUES($1,$2);',[req.body.name, req.body.url])
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

module.exports = { likeVideo, removeLikedVideo };
