import express from 'express';
import debug from 'debug';

const graphQlRouter = express.Router();
const logger = debug('rest-vs-graphql:graphql');

graphQlRouter.get('/', (req, res) => {
  logger('GraphQL called!');
  res.send('GraphQL response!!!');
});

export default graphQlRouter;
