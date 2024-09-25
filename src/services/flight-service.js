const {
  FlightRepository,
  AirplaneRepository,
} = require("../repository/index.js");
const { compareTime } = require("../utils/helper.js");


class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less then departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Error in FlightService.createFlight: ", error.message);
      throw { error };
    }
  }

  async getFlightData(data) {
     try {
      const flights = await this.flightRepository.getAllFights(data);
      return flights;
     } catch (error) {
      console.log("Error in FlightService.createFlight: ", error.message);
      throw { error };
     }
  }
}

module.exports = FlightService;

/**
 * {
 *   flightNumber,
 * airplaneID,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * dapartureTime,
 * price,
 * totalSeats -> airplane
 * }
 *
 */
