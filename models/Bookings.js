const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Bookings = db.define('bookings', {
    userId: {
      type: Sequelize.STRING,
    },
    cabId: {
      type: Sequelize.STRING
    },
    bookingStatus: {
      type: Sequelize.STRING
    }
  });

module.exports = Bookings;