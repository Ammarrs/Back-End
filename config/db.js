const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('store-module', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
