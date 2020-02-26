const express = require('express');
import debug from 'debug';
import graphQlRouter from "./GraphqlRouter";
import authorRouter from "./AuthorRouter";

const defaultRouter = express.Router();
const logger = debug('rest-vs-graphql:landing');

/* GET home page. */
defaultRouter.get('/', (req, res) => {
  logger("Welcome to landing page");
  res.send('Welcome to REST vs GraphQL project!');
});

export {defaultRouter, graphQlRouter, authorRouter};
