const {Sequelize} = require('sequelize');
require('dotenv').config()
const config = require(__dirname +"/../config/config.json")[env]

const sequelize = new Sequelize(process.env.DATABASE_URL)

module.exports = sequelize;