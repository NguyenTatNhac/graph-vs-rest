import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import jsonConfig from '../config/config';
import debug from 'debug';

const logger = debug('rest-vs-graphql:models');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
logger('You are now in environment: ' + env);
const config = jsonConfig[env];
const db = {};

let sequelize;
if (config.environment === 'production') {
  sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        dialectOption: {
          ssl: true,
          native: true
        },
        logging: true
      }
  );
} else {
  sequelize = new Sequelize(
      config.database, config.username, config.password, config
  );
}

fs.readdirSync(__dirname)
.filter(file => {
  return (file.indexOf('.') !== 0)
      && (file !== basename)
      && (file.slice(-3) === '.js');
})
.forEach(file => {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
