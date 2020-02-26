import {AuthorService} from '../services';
import utils from '../utils/Utils'

class AuthorController {

  static async getAllAuthors(req, res) {
    const authors = await AuthorService.getAllAuthors();
    utils.setSuccess(200, 'Authors retrieved', authors);
    return utils.send(res);
  }
}

export default AuthorController;
