const loginRouter = require('express').Router();

loginRouter.get('/', (req, res) => {
  res.render('login');
});

module.exports = loginRouter;

// loginRouter.get('/login', (req, res) => {
//   res.render('profile');
// });

// loginRouter.get('/register', (req, res) => {
//   res.render('register');
// });


