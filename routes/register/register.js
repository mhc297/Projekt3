const regRouter = require('express').Router();
const { createUser }  = require('../../models/user_model');
const auth = require('../../lib/auth');

regRouter.get('/', (req, res) => {
  console.log('register line 5')
  res.render('register');
});

regRouter.post('/register', createUser, (req, res) => {
  res.send(res.rows)
  console.log('register line 12')
  res.redirect('login');
});

module.exports = regRouter;
