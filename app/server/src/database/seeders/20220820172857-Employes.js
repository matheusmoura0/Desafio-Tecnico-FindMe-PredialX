'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Colaboradores', 
    [
      {
        name: 'test',
        email: 'test@medium.com',
        password: '12345678'
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('Colaboradores', null, {}),
};
