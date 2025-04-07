// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define('User', {
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10000,
  },
}, {
  tableName: 'Users',
});

module.exports = User;
