module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: { 
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },

  down: async(queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Employes');
  }
};