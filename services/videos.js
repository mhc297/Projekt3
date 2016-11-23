const fetch = require('node-fetch');

function searchVideos(req, res, next){
  console.log("Hit and req.params.event is ", req.params.event);
  const searchTerm = req.params.event;
  let key = 'AIzaSyD19PVCE5Ur3U6xrOqyEIH2-X17apGi4C8';
  console.log(`https://www.googleapis.com/youtube/v3/videos?q=${searchTerm}&part=snippet&chart=mostPopular&key=${key}`)
  fetch(`https://www.googleapis.com/youtube/v3/videos?q=${searchTerm}&part=snippet&chart=mostPopular&key=${key}`)
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
