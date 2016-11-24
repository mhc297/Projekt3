const fetch = require('node-fetch');

function searchVideos(req, res, next){
  console.log("videos.js hit")
  console.log("req.params.event", req.params.event)
  const searchTerm = req.params.event;
  let key = "AIzaSyD19PVCE5Ur3U6xrOqyEIH2-X17apGi4C8";
  fetch(`https://www.googleapis.com/youtube/v3/videos?q=${searchTerm}&part=snippet&chart=mostPopular&key=${key}`)
    .then(r => r.json())
    .then((data) => {
      console.log("data is ", data)
      res.videos = data.items[0].id.videoId;
      next();
    })
    .catch((error) => {
      console.log("Error is ", error);
      res.error = error;
      next();
    });
};

module.exports = { searchVideos };
