const express =  require('express');

const CityController = require('../../controllers/city-controller.js');

const FlighController = require('../../controllers/flight-controller.js');
const router = express.Router();

router.post('/city', CityController.create);

router.delete('/city/:id', CityController.destroy);
router.get('/city', CityController.getAll)

 router.get('/city/:id', CityController.get);

 router.patch('/city/:id', CityController.update);


router.post('/flights', FlighController.create);

router.get('/flights', FlighController.getAll)





module.exports = router;