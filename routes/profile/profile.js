<<<<<<< HEAD
const router = require('express').Router();
const { authenticate } = require('../../lib/auth');
const { getEvent, deleteEvent } = require('../../models/event_model');


router.get('/', authenticate, getEvent, (req, res) => {
  res.render('users/profile');
});

router.delete('/user/profile/:_id', deleteEvent, (req, res) => {
=======
const profileRouter = require('express').Router();
const { authenticate } = require('../../lib/authentication');
const { getLikes, removeLikes } = require('../../models/likes');


profileRouter.get('/', authenticate, getLikes, (req, res) => {
  res.render('users/profile');
});

profileRouter.delete('/user/profile/:_id', removeLikes, (req, res) => {
>>>>>>> 643992bb060af930260004b4eb8622265635e5c0
  res.redirect('/user/profile');
});

module.exports = router;
