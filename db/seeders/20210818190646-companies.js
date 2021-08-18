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
   await queryInterface.bulkInsert('Companies', [
     {
       name: 'Acme corporation',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
