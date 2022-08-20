'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('administrador', 
    [
      {
        id: 1,
        email: 'admin@admin.com',
        password: '12345678',
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('administrador', null, {}),
};

