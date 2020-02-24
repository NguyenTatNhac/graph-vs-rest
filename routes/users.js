const express = require('express');
const debug = require('debug')('rest-vs-graphql:users');
const router = express.Router();

router.get('/', function (req, res, next) {
  debug("Users endpoint!");
  res.send('Users router response!');
});

module.exports = router;
