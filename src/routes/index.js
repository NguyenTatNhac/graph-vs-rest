const express = require('express');
import debug from 'debug';
import {graphQlRouter} from "./graphql";
import {usersRouter} from "./users";

const router = express.Router();
const logger = debug('rest-vs-graphql:landing');

/* GET home page. */
router.get('/', (req, res) => {
  logger("Welcome to landing page");
  res.send('Welcome to REST vs GraphQL project!');
});

export {router, graphQlRouter, usersRouter};
