import express from 'express';
import AuthorController from '../controllers/AuthorController';

const authorRouter = express.Router();

authorRouter.post('/', AuthorController.createAuthor);
authorRouter.get('/', AuthorController.getAllAuthors);
authorRouter.get('/:id', AuthorController.getAuthor);
authorRouter.put('/:id', AuthorController.updateAuthor);
authorRouter.delete('/:id', AuthorController.deleteAuthor);
authorRouter.get('/:id/articles', AuthorController.getAllArticles);

export default authorRouter;
