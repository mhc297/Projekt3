const fetch = require('node-fetch');

function searchEvents(req, res, next){
  const searchTerm = req.params.event;
  const lat = req.params.lat;
  const long = req.params.long;
  console.log("lat, long is ", lat, long)
  let key = 'gUk0LS4bt0e1hejKIqA9gTRDaEXEcTHJ';
  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchTerm}&latlong=${lat},${long}&radius=15&apikey=${key}`)
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

module.exports = { searchEvents };
