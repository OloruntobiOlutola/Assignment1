const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Student = require("./models/student-model");
dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "I am reaadyto go",
  });
});

app.post("/", async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      student,
    },
  });
});

app.listen(5000, () => {
  console.log("I am already running!");
});
