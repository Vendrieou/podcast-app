const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.db_name, env.db_user, env.db_pwd, {
  host: env.db_host,
  port: env.db_port,
  dialect: env.db_dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.customers = require('../model/tbl_customer.js')(sequelize, Sequelize);


module.exports = db;