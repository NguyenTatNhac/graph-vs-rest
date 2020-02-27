export default (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Article.associate = models => {
    Article.hasMany(models.Comment, {
      foreignKey: "articleId",
      as: "comments",
      onDelete: "CASCADE"
    });
    Article.belongsTo(models.Author, {
      foreignKey: "authorId",
      as: "author",
      onDelete: "CASCADE"
    });
  };
  return Article;
};
