// config/db.js
const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({ path: envFile });
// const url = process.env.DATABASE_URL;
// console.log(url);
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/mydb', {
  logging: false,
});

module.exports = sequelize;
