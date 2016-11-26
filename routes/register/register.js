const regRouter = require('express').Router();
const { createUser }  = require('../../models/user_model');

regRouter.get('/', (req, res) => {
  console.log('register line 5')
  res.render('register');
});

regRouter.post('/', createUser, (req, res) => {
    console.log('register line 10')
  res.render('landing');
});

module.exports = regRouter;
