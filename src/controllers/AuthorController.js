import AuthorService from "../services/AuthorService";
import utils from '../utils/Utils'
import Validator from "../utils/Validator";

class AuthorController {

  static async createAuthor(req, res) {
    const requiredParams = Validator.verifyAuthorRequiredParams(req.body);
    if (requiredParams) {
      utils.setError(400, requiredParams);
      return utils.send(res);
    }

    try {
      const newAuthor = req.body;
      const createdAuthor = await AuthorService.createAuthor(newAuthor);
      utils.setSuccess(200, "Author created!", createdAuthor);
      return utils.send(res);
    } catch (error) {
      utils.setError(500, error.message);
      return utils.send(res);
    }
  }

  static async getAllAuthors(req, res) {
    const authors = await AuthorService.getAllAuthors();
    utils.setSuccess(200, "Authors retrieved!", authors);
    return utils.send(res);
  }

  static async getAuthor(req, res) {
    const {id} = req.params;

    if (!Number(id)) {
      utils.setError(400, `Author ID must be a number. Got: ${id}`);
      return utils.send(res);
    }

    const author = await AuthorService.getAuthor(id);

    if (author) {
      utils.setSuccess(200, "Found", author)
    } else {
      utils.setError(404, `Not found: id = ${id}`);
    }

    return utils.send(res);
  }

  static async updateAuthor(req, res) {
    const {id} = req.params;
    if (!Number(id)) {
      utils.setError(400, `Author ID must be a number. Got: ${id}`);
      return utils.send(res);
    }

    const requiredParams = Validator.verifyAuthorRequiredParams(req.body);
    if (requiredParams) {
      utils.setError(400, requiredParams);
      return utils.send(res);
    }

    try {
      const editedAuthor = req.body;
      const author = await AuthorService.updateAuthor(id, editedAuthor);

      if (author != null) {
        utils.setSuccess(200, "Author updated!", author);
      } else {
        utils.setError(404, `Author not found: id = ${id}`);
      }

      return utils.send(res);
    } catch (error) {
      utils.setError(500, error.message);
      return utils.send(res);
    }
  }

  static async deleteAuthor(req, res) {
    const {id} = req.params;
    if (!Number(id)) {
      utils.setError(400, `Author ID must be a number. Got: ${id}`);
      return utils.send(res);
    }

    try {
      const author = await AuthorService.deleteAuthor(id);

      if (author != null) {
        utils.setSuccess(200, "Author deleted!")
      } else {
        utils.setError(404, `Author not found: id = ${id}`);
      }

      return utils.send(res);
    } catch (error) {
      utils.setError(500, error.message);
      return utils.send(res);
    }
  }
}

export default AuthorController;
