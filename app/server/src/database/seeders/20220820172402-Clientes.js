'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Clientes', 
    [
      {
        id: 1,
        name: 'test',
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('Clientes', null, {}),
};