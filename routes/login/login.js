const loginRouter = require('express').Router();
// const { createToken } = require('../../lib/auth');

loginRouter.get('/', (req, res) => {
  res.redirect('landing');
});

loginRouter.post('/', (req, res) => {
  res.render('landing');
});

module.exports = loginRouter;
