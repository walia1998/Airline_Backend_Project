const { FlightService } = require("../services/index.js");
const {SucceedCodes} = require('../utils/error-codes')
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    }
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SucceedCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Successfully created the flight ",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    console.log(req.query);
    const response = await flightService.getFlightData(req.query);
    return res.status(SucceedCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched the flight ",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a flight",
      err: error,
    });
  }
};
module.exports = {
  create,
  getAll,
};
