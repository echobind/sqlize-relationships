'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const companyId = 4;
   const currentDate = new Date();
   await queryInterface.bulkInsert('Users', [
      {
        email: 'john@acme.com',
        firstName: 'john',
        lastName: 'smith',
        companyId,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        email: 'log_w@domain.com',
        firstName: 'Logan',
        lastName: 'WOLVERINE',
        companyId,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        email: 'john-connor@domain.com',
        firstName: 'John',
        lastName: 'CONNOR',
        companyId,
        createdAt: currentDate,
        updatedAt: currentDate
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
