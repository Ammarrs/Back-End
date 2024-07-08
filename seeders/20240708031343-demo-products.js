'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = [];
    for (let i = 1; i <= 100; i++) {
      products.push({
        name: `Product ${i}`,
        price: (Math.random() * 100).toFixed(2),
        categoryId: Math.floor(Math.random() * 10) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Products', products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
