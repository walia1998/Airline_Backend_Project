const { FlightService } = require("../services/index.js");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
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


const getAll = async (req,res) => {
  try {
    console.log(req.query);
    const response = await flightService.getFlightData(req.query);
    return res.status(200).json({
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
}
module.exports = {
  create,
  getAll,
};
