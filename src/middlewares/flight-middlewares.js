const {ClientErrorsCodes} = require('../utils/error-codes')

const validateCreateFlight = (req,res, next) => {
    if( 
        !req.body.flightNumber || !req.body.airplaneId ||  !req.body.departureAirportId ||  !req.body.arrivalAirportId ||  !req.body.arrivalTime || !req.body.departureTime ||  !req.body.price
    ) {
        //if any of the body params is missing we come inside the if

        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data : {}, 
            success : false,
            message : "Invalud request body for create flight",
            err : "Missing mandatroy properties to create a flight"
        });
    }

    next();
}


module.exports = {
    validateCreateFlight
}