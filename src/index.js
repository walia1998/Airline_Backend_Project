const express = require("express");
require('dotenv').config()


const setupAndStartServer = async () => {
    // Create The express object
    const app = express();
    const PORT = 3000

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`)
        console.log(process.env)
    });
}

setupAndStartServer();