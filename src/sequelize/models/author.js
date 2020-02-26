export default (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
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
  Author.associate = function (models) {
    // associations can be defined here
  };
  return Author;
};
