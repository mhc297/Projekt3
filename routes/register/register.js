const regRouter = require('express').Router();

regRouter.get('/', (req, res) => {
  res.render('register');
});

module.exports = regRouter;
