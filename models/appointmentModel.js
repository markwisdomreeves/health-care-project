
const mongoose = require("mongoose");


const appointmentModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  services: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})


module.exports = mongoose.model("Appointments", appointmentModel);
