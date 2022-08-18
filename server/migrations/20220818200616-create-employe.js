'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('employes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: { 
        type: Sequelize.PASSWORD,
        allowNull: false
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('employes');
  }
};
