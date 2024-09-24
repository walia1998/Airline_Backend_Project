const express = require("express");

const { PORT } = require("./config/serverConfig.js");
const ApiRoutes = require("./routes/index.js");

const db = require('./models/index.js')
const bodyParser = require("body-parser");
//const { Airplane} = require("./models/index.js");

const setupAndStartServer = async () => {
  // Create The express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);

   if(process.env.SYNC_DB) {
    db.sequelize.sync({alter : true});
   }
   
  });
};

setupAndStartServer();
