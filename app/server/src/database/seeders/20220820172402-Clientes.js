'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Clientes', 
    [
      {
        name: 'test',
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('Clientes', null, {}),
};