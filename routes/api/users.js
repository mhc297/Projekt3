const express = require('express');
const router = express.Router();
const { createUser } = require('../../models/user_model.js');

router.post('/', createUser, (req, res) => {
  res.status(200).end();
});

module.exports = router;
