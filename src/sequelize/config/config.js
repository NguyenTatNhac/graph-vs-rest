require('dotenv').config();

module.exports = {
  development: {
    database: 'rest_vs_graphql_dev',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    database: 'rest_vs_graphql_test',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    dialect: 'postgres'
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
