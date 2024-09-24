"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});

    */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Boeing 737",
          capacity: 400,
          createdAt : new Date(),
          UpdatedAt : new Date()
        },
        
        {
          modelNumber: "Boeing 777",
          capacity: 600,
          createdAt : new Date(),
          UpdatedAt : new Date()
        },
        
        {
          modelNumber: "Boeing 747",
          capacity: 450,
          createdAt : new Date(),
          UpdatedAt : new Date()
        },
        
        {
          modelNumber: "Airbus A330",
          capacity: 800,
          createdAt : new Date(),
          UpdatedAt : new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
