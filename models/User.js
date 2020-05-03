const { Sequelize } = require('sequelize');
const db = require('../config/database');

const User = db.define('users', {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING,
    }
  });

module.exports = User;