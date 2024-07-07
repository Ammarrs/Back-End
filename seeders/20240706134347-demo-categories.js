'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categories = [];
    for(let i = 1 ; i <= 10 ; i++) {
      categories.push({
        name:`Category ${i}`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    } 
    await queryInterface.bulkInsert('Categories',categories,{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories',null,{});
  }
};
