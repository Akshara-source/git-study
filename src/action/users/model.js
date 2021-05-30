const Sequelize = require('sequelize')
const db = require('../../database/connect')

const users = db.define('User',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false

    },
    email:{
        type:Sequelize.STRING,
        allowNull: false 
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false
    }
},{timestamps:false})

module.exports = users