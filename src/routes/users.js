import express from 'express';
import debug from 'debug';

const usersRouter = express.Router();
const logger = debug('rest-vs-graphql:users');

usersRouter.get('/', (req, res) => {
  logger("Get all users called!");
  res.send('Users router response!');
});

export {usersRouter};
