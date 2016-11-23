const fetch = require('node-fetch');

function searchEvents(req, res, next){
  const searchTerm = req.params.event;
  let key = 'gUk0LS4bt0e1hejKIqA9gTRDaEXEcTHJ';
  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchTerm}&latlong=40.7400239,-73.98967549999999&radius=15&apikey=${key}`)
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
