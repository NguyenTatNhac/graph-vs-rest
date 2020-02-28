import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import DefaultRouter from './routes/DefaultRouter';
import AuthorRouter from './routes/AuthorRouter';
import ArticleRouter from './routes/ArticleRouter';
import CommentRouter from './routes/CommentRouter'
import GraphQlRouter from './routes/GraphqlRouter';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// config routers
app.use('/', DefaultRouter);
app.use('/authors', AuthorRouter);
app.use('/articles', ArticleRouter);
app.use('/comments', CommentRouter);
app.use('/graphql', GraphQlRouter);

module.exports = app;
