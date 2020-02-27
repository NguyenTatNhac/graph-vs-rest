import Validator from "../utils/Validator";
import utils from "../utils/Utils";
import ArticleService from "../services/ArticleService";
import AuthorService from "../services/AuthorService";

class ArticleController {

  static async createArticle(req, res) {
    const requiredParams = Validator.verifyArticleRequiredParams(req.body);
    if (requiredParams) {
      utils.setError(400, requiredParams);
      return utils.send(res);
    }

    const {authorId} = req.body;
    if (!Number(authorId)) {
      utils.setError(400, "'authorId' must be a number");
      return utils.send(res);
    }

    const author = await AuthorService.getAuthor(authorId);
    if (!author) {
      utils.setError(400, "Author could not be found!'");
      return utils.send(res);
    }

    try {
      const newArticle = req.body;

      // We do not allow use to defined there id, it will cause the DB problem
      newArticle.id = undefined;

      const createdArticle = await ArticleService.createArticle(newArticle);
      utils.setSuccess(200, "Article created!", createdArticle);
      return utils.send(res);
    } catch (error) {
      utils.setError(500, error.message);
      return utils.send(res);
    }
  }

  static async getAllArticles(req, res) {
    const articles = await ArticleService.getAllArticles();
    utils.setSuccess(200, "Authors retrieved!", articles);
    return utils.send(res);
  }

  static async getArticle(req, res) {
    const {id} = req.params;

    if (!Number(id)) {
      utils.setError(400, `Article ID must be a number. Got: ${id}`);
      return utils.send(res);
    }

    const article = await ArticleService.getArticle(id);

    if (article) {
      utils.setSuccess(200, "Article Found", article)
    } else {
      utils.setError(404, `Article not found: id = ${id}`);
    }

    return utils.send(res);
  }

  static async updateArticle(req, res) {
    const {id} = req.params;
    if (!Number(id)) {
      utils.setError(400, `Article ID must be a number. Got: ${id}`);
      return utils.send(res);
    }

    const requiredParams = Validator.verifyArticleRequiredParams(req.body);
    if (requiredParams) {
      utils.setError(400, requiredParams);
      return utils.send(res);
    }

    const originalArticle = await ArticleService.getArticle(id);
    const editedArticle = req.body;

    try {
      // Reset ID of article in case users send new ID in the request body
      editedArticle.id = originalArticle.id;
      const article = await ArticleService.updateArticle(id, editedArticle);

      if (article != null) {
        utils.setSuccess(200, "Article updated!", article);
      } else {
        utils.setError(404, `Article not found: id = ${id}`);
      }

      return utils.send(res);
    } catch (error) {
      utils.setError(500, error.message);
      return utils.send(res);
    }
  }

  static async deleteArticle(req, res) {
    const {id} = req.params;
    if (!Number(id)) {
      utils.setError(400, `Article ID must be a number. Got: ${id}`);
      return utils.send(res);
    }

    try {
      const article = await ArticleService.deleteArticle(id);

      if (article != null) {
        utils.setSuccess(200, "Article deleted!")
      } else {
        utils.setError(404, `Article not found: id = ${id}`);
      }

      return utils.send(res);
    } catch (error) {
      utils.setError(500, error.message);
      return utils.send(res);
    }
  }
}

export default ArticleController;
