export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Comment.associate = models => {
    Comment.belongsTo(models.Author, {
      foreignKey: "authorId",
      as: "author"
    });
    Comment.belongsTo(models.Article, {
      foreignKey: "articleId",
      as: "article"
    });
  };
  return Comment;
};
