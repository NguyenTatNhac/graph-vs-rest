const express = require('express');
const router = express.Router();
const debug = require('debug')('rest-vs-graphql:graphql');

router.get('/', function (req, res, next) {
  debug('GraphQL print debugger!');
  res.send('GraphQL response!!!');
});

module.exports = router;
