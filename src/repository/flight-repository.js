const { Flights } = require("../models/index.js");

const { Op } = require("sequelize");

class FlightRepository {
  //PrivateMethod

  #createFilter(data) {
    let filter = {};
    if (data.arrivaAirportId) {
      filter.arrivaAirportId = data.arrivaAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    //  if(data.minPrice && data.maxPrice) {
    //     Object.assign(filter, {
    //         [Op.and] : [
    //             {price: {[Op.lte]: data.maxPrice}},
    //             {price: {[Op.gte]: data.minPrice}}
    //         ]
    //     })
    //  }

    let priceFilter = [];

    if (data.minPrice) {
      //   Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }

    if (data.maxPrice) {
      //Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });

    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async getAllFights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }
}

module.exports = FlightRepository;

/**
 *
 * where : {
 *    arrivalAirportId : 2,
 *    departureAirportId : 4,
 * price : {
 * [Op.gte]:400
 * }
 * }
 *
 */
