const express = require("express");
const studentController = require("../controllers/student-controller");

const router = express.Router();

const { getAllStudent, createStudent, getStudent } = studentController;

router.route("/").get(getAllStudent).post(createStudent);

router.route("/:id").get(getStudent);

module.exports = router;
