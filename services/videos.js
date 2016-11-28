const fetch = require('node-fetch');

function searchVideos(req, res, next){
  const searchTerm = req.params.video;
  let key = 'AIzaSyD19PVCE5Ur3U6xrOqyEIH2-X17apGi4C8';
  fetch(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&kind=video&order=viewCount&limit=10&key=${key}`)
    .then(r => r.json())
    .then((data) => {
      res.videos = data;
      next();
    })
    .catch((error) => {
      console.log("Error is ", error);
      res.error = error;
      next();
    });
};

module.exports = { searchVideos };
