const { Op } = require('sequelize');
const { City } = require("../models/index.js");

class CityRepository {
    async createCity({ name }) { //Destructuring the object
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw {error};
        }
    }

    async deleteCity( cityId ) {
        try {
            await City.destroy({
                where : {
                    id: cityId,
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async updateCity(cityId, data) {
        try {
            console.log("City ID:", cityId);
           /**
            *  The below approach also work but will not return updated object
            * If we are uusing Pg then returning : true can be used, else not 
            * 
            */

            // const city  = await City.update(data, {
            //     where : {
            //         id : cityId,
            //     }, 
                
            // });

            // For getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city  = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }


    async getAllCities(filter) {
        try {

            if(filter.name) {
                const cities = await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return cities
            }
        const cities = await City.findAll();
        return cities; 
        } catch (error) {
            console.log("Something went wrong in the repository layer");
                throw {error};
            }
        }
}



module.exports = CityRepository;