module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('service_orders', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      client_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      employee_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Employes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: { 
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: { 
        type: Sequelize.DATE,
        allowNull: false
      },
      related_problem: { 
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('service_orders');
  }
};