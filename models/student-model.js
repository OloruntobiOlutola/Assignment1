const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: {
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
  description: {
    type: String,
    min: [20, "Description must be atleast 20 characters"],
    max: [200, "Description must be at most 200 characters"],
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
