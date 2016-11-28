const profileRouter = require('express').Router();
const { authenticate } = require('../../lib/auth');
const { getEvent, deleteEvent } = require('../../models/event_model');


profileRouter.get('/', authenticate, getEvent, (req, res) => {
 res.render('users/profile');
});

profileRouter.delete('/user/profile/:_id', deleteEvent, (req, res) => {
 res.redirect('/user/profile');
});

module.exports = profileRouter;
