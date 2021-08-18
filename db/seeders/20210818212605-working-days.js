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
    const currentDate = new Date();
    await queryInterface.bulkInsert('WorkingDays', [
      {
        weekDay: 'Monday',
        workingDate: currentDate,
        isWorking: true,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        weekDay: 'Tuesday',
        workingDate: currentDate,
        isWorking: true,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        weekDay: 'Wednesday',
        workingDate: currentDate,
        isWorking: false,
        createdAt: currentDate,
        updatedAt: currentDate,
      }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('WorkingDays', null, {});
  }
};
