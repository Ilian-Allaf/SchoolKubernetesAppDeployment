const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

app.use(cors());
app.get("/", controllerGetAllLocations);

const Cat = mongoose.model("Cat", { name: String });

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb://localhost:27017");
  console.log("Connected to MongoDB");
  const kitty = new Cat({ name: "Zildjian" });
  kitty.save().then(() => console.log("meow"));
  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
}

async function controllerGetAllLocations(req, res) {
  const cats = await Cat.find();
  return res.status(200).send(cats);
}

main();
