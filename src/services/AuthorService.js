import database from '../sequelize/models';

class AuthorService {

  static async createAuthor(author) {
    return database.Author.create(author);
  }

  static async getAuthor(id) {
    return database.Author.findOne({
      where: {
        id: Number(id)
      }
    });
  }

  static async getAllAuthors() {
    return database.Author.findAll();
  }

  static async updateAuthor(id, editedAuthor) {
    const authorToUpdate = await this.getAuthor(id);
    if (authorToUpdate) {
      await database.Author.update(editedAuthor, {
        where: {
          id: Number(id)
        }
      });
      return this.getAuthor(id);
    }
    return null;
  }

  static async deleteAuthor(id) {
    const authorToDelete = await this.getAuthor(id);
    if (authorToDelete) {
      await database.Author.destroy({
        where: {id: Number(id)}
      });
      return true;
    }
    return null;
  }
}

export default AuthorService;
