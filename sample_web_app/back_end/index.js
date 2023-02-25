const express = require("express");
const cors = require("cors");
const app = express();
const locationsService = require("./locations.service")
const mongoose = require("mongoose");
const port = 3000;
require("dotenv").config();

app.use(cors());


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
async function main(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo Database");
}

main();

async function controllerGetAllLocations(req, res) {
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;
    const locations = await locationsService.findAll(limit, offset);
    return res.status(200).send(locations);
}

app.get("/", controllerGetAllLocations);
