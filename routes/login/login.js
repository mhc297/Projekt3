const loginRouter = require('express').Router();
const { createToken } = require('../../lib/auth');

loginRouter.get('/', createToken, (req, res) => {
  res.redirect('landing?token');
});

module.exports = loginRouter;

// loginRouter.get('/login', (req, res) => {
//   res.render('profile');
// });

// loginRouter.get('/register', (req, res) => {
//   res.render('register');
// });
