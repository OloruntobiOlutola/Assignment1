const express = require("express");
const studentRoutes = require("./routes/student-routes");

const app = express();
app.use(express.json());

app.use("/api/v1/student", studentRoutes);

module.exports = app;
