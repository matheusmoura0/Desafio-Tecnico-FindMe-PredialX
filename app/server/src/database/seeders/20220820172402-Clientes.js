'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Clientes', 
    [
      {
        name: 'Cliente Teste',
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('Clientes', null, {}),
};