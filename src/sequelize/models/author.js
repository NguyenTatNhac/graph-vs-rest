export default (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: DataTypes.DATE,
    bio: DataTypes.TEXT
  }, {});
  Author.associate = models => {
    Author.hasMany(models.Article, {
      foreignKey: "authorId",
      as: "articles",
      onDelete: "CASCADE"
    });
    Author.hasMany(models.Comment, {
      foreignKey: "authorId",
      as: "comments",
      onDelete: "CASCADE"
    });
  };
  return Author;
};
