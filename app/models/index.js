const dbConfig = require('../config/db.config.js')
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
  //   operatorsAliases: false,

  //   pool: {
  //     max: dbConfig.pool.max,
  //     min: dbConfig.pool.min,
  //     acquire: dbConfig.pool.acquire,
  //     idle: dbConfig.pool.idle
  //   }
})

const connectMysql = async function () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
connectMysql()

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//Models
db.User = require('./User.js')(sequelize, DataTypes)
module.exports = db
