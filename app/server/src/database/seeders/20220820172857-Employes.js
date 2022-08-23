'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Colaboradores', 
    [
      {
        name: 'Colaborador Teste',
        email: 'test@medium.com',
        password: '12345678'
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('Colaboradores', null, {}),
};
