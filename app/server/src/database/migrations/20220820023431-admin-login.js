'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('administrador', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false

      },
      password: { 
        type: Sequelize.STRING,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('administrador');
  }
};
