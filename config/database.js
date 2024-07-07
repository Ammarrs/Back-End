const { sequelize } = require('sequelize');

const sequelize = new sequelize('Back-end Database','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;