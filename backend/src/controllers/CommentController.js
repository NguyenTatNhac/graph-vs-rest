import AuthorService from "../services/AuthorService";
import utils from '../utils/Utils'
import Validator from "../utils/Validator";
import ArticleService from "../services/ArticleService";
import CommentService from "../services/CommentService";

class CommentController {

  static async createComment(req, res) {
    const requiredParams = Validator.verifyCommentRequiredParams(req.body);
    if (requiredParams) {
      utils.setError(400, requiredParams);
      return utils.send(res);
    }

    const {authorId, articleId} = req.body;

    const author = await AuthorService.getAuthor(authorId);
    if (author == null) {
      utils.setError(400, "Author could not be found!'");
      return utils.send(res);
    }

    const article = await ArticleService.getArticle(articleId);
    if (article == null) {
      utils.setError(400, "Article could not be found!'");
      return utils.send(res);
    }

    try {
      const newComment = req.body;
      const createdComment = await CommentService.createComment(newComment);
      utils.setSuccess(200, "Comment created!", createdComment);
      return utils.send(res);
    } catch (error) {
      return utils.internalServerError(error.message, res);
    }
  }

  static async getComment(req, res) {
    const {id} = req.params;

    if (!Number(id)) {
      utils.setError(400, `Comment ID must be a number. Got: ${id}`);
      return utils.send(res);
    }

    const comment = await CommentService.getComment(id);

    if (comment) {
      utils.setSuccess(200, "Found", comment)
    } else {
      utils.setError(404, `Not found: id = ${id}`);
    }

    return utils.send(res);
  }

  static async updateComment(req, res) {
    const {id} = req.params;
    if (!Number(id)) {
      utils.setError(400, `Comment ID must be a number. Got: ${id}`);
      return utils.send(res);
    }

    const requiredParams = Validator.verifyCommentRequiredParams(req.body);
    if (requiredParams) {
      utils.setError(400, requiredParams);
      return utils.send(res);
    }

    const originalComment = CommentService.getComment(id);
    if (originalComment == null) {
      utils.setError(404, `Comment not found. id = ${id}`);
      return utils.send(res);
    }

    try {
      const editedComment = req.body;
      // In some situation, the ID of editedComment is different with the original
      // So we need to reset it to make sure the primary key will not be updated
      editedComment.id = originalComment.id;
      const comment = await CommentService.updateComment(id, editedComment);
      utils.setSuccess(200, "Comment updated!", comment);
      return utils.send(res);
    } catch (error) {
      return utils.internalServerError(error.message, res);
    }
  }

  static async deleteComment(req, res) {
    const {id} = req.params;
    if (!Number(id)) {
      utils.setError(400, `Comment ID must be a number. Got: ${id}`);
      return utils.send(res);
    }

    try {
      const comment = await CommentService.deleteComment(id);

      if (comment != null) {
        utils.setSuccess(200, "Comment deleted!")
      } else {
        utils.setError(404, `Comment not found: id = ${id}`);
      }

      return utils.send(res);
    } catch (error) {
      return utils.internalServerError(error.message, res);
    }
  }
}

export default CommentController;
