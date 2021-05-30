const Sequelize = require('sequelize');
const db = require('../../database/connect')
const roles = db.define('Role',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false

    },
    name:{
        type:Sequelize.STRING,
        allowNull:false

    }
},{timestamps:false});

module.exports = roles;