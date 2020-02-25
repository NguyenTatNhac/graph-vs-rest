import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {graphQlRouter, router, usersRouter} from './routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// config routers
app.use('/', router);
app.use('/users', usersRouter);
app.use('/graphql', graphQlRouter);

module.exports = app;
