import database from '../sequelize/models';

class CommentService {

  static async createComment(comment) {
    return database.Comment.create(comment);
  }

  static async getComment(id) {
    return database.Comment.findOne({
      where: {
        id: Number(id)
      }
    });
  }

  static async updateComment(id, editedComment) {
    const comment = await this.getComment(id);
    if (comment) {
      await database.Comment.update(editedComment, {
        where: {
          id: Number(id)
        }
      });
      return this.getComment(id);
    }
    return null;
  }

  static async deleteComment(id) {
    const comment = await this.getComment(id);
    if (comment) {
      await database.Comment.destroy({
        where: {
          id: Number(id)
        }
      });
      return comment;
    }
    return null;
  }

  static async getCommentByArticleId(articleId) {
    return database.Comment.findAll({
      where: {
        articleId: articleId
      }
    });
  }
}

export default CommentService;
