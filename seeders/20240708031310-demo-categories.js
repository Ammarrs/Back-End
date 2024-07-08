'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = [];
    for (let i = 1; i <= 10; i++) {
      categories.push({
        name: `Category ${i}`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
