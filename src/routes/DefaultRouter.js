const express = require('express');
import debug from 'debug';

const defaultRouter = express.Router();
const logger = debug('rest-vs-graphql:landing');

/* GET home page. */
defaultRouter.get('/', (req, res) => {
  logger("Welcome to landing page");
  res.send('Welcome to REST vs GraphQL project!');
});

export default defaultRouter;
