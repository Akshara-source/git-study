require('dotenv').config();//dotenv extention connecting env file with this page
const {Sequelize} = require('sequelize');
const db = new Sequelize(
    process.env.dbname,
    process.env.dbuser_local,
    process.env.dbpassword_local,
    {
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
    }
)

module.exports = db;

  