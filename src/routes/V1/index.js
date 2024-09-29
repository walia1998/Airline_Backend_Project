const express =  require('express');

const {FlightMiddlewares} = require('../../middlewares/index')

const CityController = require('../../controllers/city-controller.js');

const FlighController = require('../../controllers/flight-controller.js');

const AirportController = require('../../controllers/airport-controller.js');
const router = express.Router();

router.post('/city', CityController.create);

router.delete('/city/:id', CityController.destroy);
router.get('/city', CityController.getAll)

 router.get('/city/:id', CityController.get);

 router.patch('/city/:id', CityController.update);


router.post('/flights', 
    FlightMiddlewares.validateCreateFlight,
    FlighController.create);
router.get('/flights', FlighController.getAll);
router.post('/airports', AirportController.create);





module.exports = router;