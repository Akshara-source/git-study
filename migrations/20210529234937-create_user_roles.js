'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_roles",{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
  
      },
      role_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"Roles",
          field:"id"
        }

      },
      user_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"Users",
          field:"id"
        }

      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_roles')

  }
};
