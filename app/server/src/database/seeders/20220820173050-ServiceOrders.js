'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('ServiceOrders', 
    [
      {
        id: 1,
        client_id: 1,
        employee_id: 1,
        related_problem: 'batatinha'
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('ServiceOrders', null, {}),
};

