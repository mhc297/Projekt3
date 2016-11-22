const loginRouter = require('express').Router();

loginRouter.get('/', (req, res) => {
  res.render('login');
});


loginRouter.get('/login', (req, res) => {
  res.render('/users/profile');
});

loginRouter.get('/register', (req, res) => {
  res.render('register');
});

module.exports = loginRouter;
