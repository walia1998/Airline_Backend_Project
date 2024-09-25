const { Airplane } = require("../models/index.js");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      console.log("Fetching airplane with ID: ", id); 
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
