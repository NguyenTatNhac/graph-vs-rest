import database from '../sequelize/models';

class ArticleService {

  static async createArticle(article) {
    return database.Article.create(article);
  }

  static async getAllArticles() {
    return database.Article.findAll();
  }

  static async getArticle(id) {
    return database.Article.findOne({
      where: {
        id: Number(id)
      }
    });
  }

  static async updateArticle(id, editedArticle) {
    const article = await this.getArticle(id);
    if (article) {
      await database.Article.update(editedArticle, {
        where: {
          id: Number(id)
        }
      });
      return this.getArticle(id);
    }
    return null;
  }

  static async deleteArticle(id) {
    const article = await this.getArticle(id);
    if (article) {
      await database.Article.destroy({
        where: {
          id: Number(id)
        }
      });
      return article;
    }
    return null;
  }

  static async getArticlesByAuthorId(authorId) {
    return database.Article.findAll({
      where: {
        authorId: authorId
      }
    });
  }
}

export default ArticleService;
