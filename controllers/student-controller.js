const Student = require("../models/student-model");

exports.getAllStudent = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({
    status: "success",
    results: students.length,
    students,
  });
};

exports.createStudent = async (req, res) => {
  const {
    fullName,
    phoneNumber,
    linkedlnUrl,
    twitterUrl,
    dateOfBirth,
    description,
  } = req.body;
  const fullNameFilter = new RegExp(`[A-Za-z ]+`);
  const phoneNumberFilter = new RegExp("[+]([0-9]{10,14})");
  const linkedlnUrlFilter = new RegExp("((www.linkedin.com)[/][a-z A-Z 0-9]+)");
  const twitterUrlFilter = new RegExp("((www.twitter.com)[/][a-z A-Z 0-9]+)");
  const dateOfBirthFilter = new RegExp("([0-9]{4}[-][0-9]{2}[-][0-9]{2})");
  const descriptionFilter = new RegExp("[A-Za-z0-9 ,?./\\-_]{20,200}");
  const filteredSuccessfully =
    fullNameFilter.test(fullName) &&
    phoneNumberFilter.test(phoneNumber) &&
    linkedlnUrlFilter.test(linkedlnUrl) &&
    twitterUrlFilter.test(twitterUrl) &&
    dateOfBirthFilter.test(dateOfBirth) &&
    descriptionFilter.test(description);
  if (!filteredSuccessfully) {
    return res.status(400).json({
      status: "fail",
      message: "invalid input",
    });
  }
  try {
    const student = filteredSuccessfully
      ? await Student.create({
          fullName,
          phoneNumber,
          linkedlnUrl,
          twitterUrl,
          dateOfBirth,
          description,
        })
      : null;
    res.status(201).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(400).json({
      status: "fail",
      message: `student with the id ${req.params.id} not found`,
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      student,
    },
  });
};
