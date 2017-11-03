const express = require('express');

const router = express.Router();

const User = require('../../models/user');

router.get('/list', (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      return req.send(err);
    }
    return res.json(users);
  });
});

module.exports = router;
