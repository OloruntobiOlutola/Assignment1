const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./index");

mongoose
  .connect(process.env.DB_STRING)
  .then(() => console.log("connected to db"));

app.listen(5000, () => {
  console.log("I am already running!");
});
