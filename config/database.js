const { Sequelize } = require('sequelize');

// db_name, db_user, password
const sequelize = new Sequelize('wednesday_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;