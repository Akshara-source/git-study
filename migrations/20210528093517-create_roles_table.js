'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Roles",{
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,

    },
    name:{
      type:Sequelize.STRING,
      primaryKey:true
    }
   });
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('Roles')
  }
};
