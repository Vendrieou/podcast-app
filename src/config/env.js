require('dotenv').config()

const env = {
  db_name: process.env.DATABASE_NAME || 'sequelize_test',
  db_user: process.env.DATABASE_USER || 'root',
  db_pwd: process.env.DATABASE_PSWD || null,
  db_host: process.env.DATABASE_HOST || 'localhost',
  db_port: process.env.DATABASE_PORT || 3306,
  db_dialect: 'mariadb',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;