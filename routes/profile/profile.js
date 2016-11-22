const profileRouter = require('express').Router();
const { authenticate } = require('../../lib/authentication');
const { getLikes, removeLikes } = require('../../models/likes');


profileRouter.get('/', authenticate, getLikes, (req, res) => {
  res.render('users/profile');
});

profileRouter.delete('/user/profile/:_id', removeLikes, (req, res) => {
  res.redirect('/user/profile');
});

module.exports = router;
