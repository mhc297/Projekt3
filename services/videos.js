const fetch = require('node-fetch');

function searchVideos(req, res, next){
  const searchTerm = placeholder.event.value;
  let key = AIzaSyD19PVCE5Ur3U6xrOqyEIH2-X17apGi4C8;
  fetch(`https://www.googleapis.com/youtube/v3/videos?q=${searchTerm}&part=snippet&chart=mostPopular&key=${key}`)
    .then(r => r.json())
    .then((data) => {
      res.rows = data;
      next();
    })
    .catch((error) => {
      console.log("Error is ", error);
      res.error = error;
      next();
    });
};

module.exports = { searchVideos };
