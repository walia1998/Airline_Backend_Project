'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};