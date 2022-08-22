module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('OrderDeServiço', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      client_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Clientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      employee_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Colaboradores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: { 
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
      },
      updated_at: { 
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
        allowNull: false
      },
      related_problem: { 
        type: Sequelize.STRING,
        allowNull: false
      }
      
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('OrderDeServiço');
  }
};