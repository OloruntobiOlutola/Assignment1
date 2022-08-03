const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Student must have a name"],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Student must have a phone-number"],
  },
  twitterUrl: String,
  linkedlnUrl: String,
  dateOfBirth: Date,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
