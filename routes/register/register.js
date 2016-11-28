const regRouter = require('express').Router();
const { createUser }  = require('../../models/user_model');

regRouter.get('/', (req, res) => {
  console.log('register line 5')
  res.render('register');
});

regRouter.post('/newuser', createUser, (req, res) => {
  res.send(res.rows)
    console.log('register line 12')
  res.redirect('login');
});

module.exports = regRouter;
