import express from 'express';
import ArticleController from "../controllers/ArticleController";

const articleRouter = express.Router();

articleRouter.post('/', ArticleController.createArticle);
articleRouter.get('/', ArticleController.getAllArticles);
articleRouter.get('/:id', ArticleController.getArticle);
articleRouter.put('/:id', ArticleController.updateArticle);
articleRouter.delete('/:id', ArticleController.deleteArticle);

export default articleRouter;
