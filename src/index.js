const express = require("express");
const { City } = require("./models/index.js");

const {PORT} = require('./config/serverConfig.js');
const ApiRoutes = require('./routes/index.js')

const bodyParser = require("body-parser");


const setupAndStartServer = async () => {
    // Create The express object
    const app = express();
   

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


 app.use('/api', ApiRoutes);


    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();