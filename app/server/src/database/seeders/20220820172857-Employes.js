'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Employes', 
    [
      {
        id: 1,
        name: 'test',
        email: 'test@medium.com',
        password: '12345678'
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('Employes', null, {}),
};
