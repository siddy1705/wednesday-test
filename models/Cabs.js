const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Cabs = db.define('cabs', {
    type: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING
    },
    isBooked: {
      type: Sequelize.STRING
    }
  });

module.exports = Cabs;