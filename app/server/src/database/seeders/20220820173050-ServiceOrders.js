'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('OrderDeServiço', 
    [
      {
        client_id: 1,
        employee_id: 1,
        related_problem: 'batatinha'
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('OrderDeServiço', null, {}),
};

