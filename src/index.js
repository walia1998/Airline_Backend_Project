const express = require("express");

const { PORT } = require("./config/serverConfig.js");
const ApiRoutes = require("./routes/index.js");

//const db = require('./models/index.js')
const bodyParser = require("body-parser");
const { City, Airport} = require("./models/index.js");

const setupAndStartServer = async () => {
  // Create The express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
   // db.sequelize.sync({ alter: true });
   const city = await City.findOne({
    where : {
        id : 9
    }
   });
   const airports = await city.getAirports();
   await city.addAirports({
    name : 'Juhu Airport',
   })
   console.log(city,airports);
  });
};

setupAndStartServer();
