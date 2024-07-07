'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const products = [];
    for (let i = 1; i<=100;i++) {
      products.push({
        name: `Product ${i}`,
        price: (Math.random()*100).toFixed(2),
        categoryId: Math.floor(Math.random()*10)+1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Products',products,{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products',null,{});
  }
};
