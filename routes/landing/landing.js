const landingRouter = require('express').Router();

landingRouter.get('/', (req, res) => {
  res.render('landing');
});

module.exports = landingRouter;
