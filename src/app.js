import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {defaultRouter, authorRouter, graphQlRouter} from './routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// config routers
app.use('/', defaultRouter);
app.use('/authors', authorRouter);
app.use('/graphql', graphQlRouter);

module.exports = app;
