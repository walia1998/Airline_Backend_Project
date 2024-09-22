const { CityService } = require("../services/index.js");

const cityService = new CityService();
/**
 *
 * POST
 * Data comes from -> req.body
 */

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfuly created a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

//Delete  --> /city/:id  params.id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfuly deleted a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delet a city",
      err: error,
    });
  }
};

// GET --> /city/:id
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfuly fetched a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get a city",
      err: error,
    });
  }
};

// PATCH --> /city/:id -> req.boy
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.body, req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfuly update a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};
