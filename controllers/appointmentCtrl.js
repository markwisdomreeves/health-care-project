
const Appointments = require("../models/appointmentModel");
const asyncHandler = require("express-async-handler");


const appointmentCtrl = {

  // @desc    Get All Appointments
  // @route   GET /api/appointments
  // @access  Public
  getAllAppointments: asyncHandler (async (req, res) => {
    try {
      const allAppointments = await Appointments.find()
      res.json(allAppointments)
    }catch(err) {
      return res.status(500).json({msg: err.message})
    }
  }),

  // @desc    Get a Single Appointment
  // @route   GET /api/appointments:/id
  // @access  Public
  getSingleAppointment: asyncHandler (async (req, res) => {
    try {
      const singleAppointment = await Appointments.findById(req.params.id)
      if (singleAppointment) {
        res.json(singleAppointment)
      } else {
        res.json({msg: "Appointment does not exist"})
      }
    }catch(err) {
      return res.status(500).json({msg: err.message})
    }
  }),

  // @desc    Create an Appointment
  // @route   POST /api/appointments
  // @access  Private
  createAppointment: asyncHandler (async (req, res) => {
    try {
      const { name, email, services, date} = req.body;

      if (!name || !email || !services || !date)
        return res.status(400).json({msg: "All field inputs are required"})

      if (!validateEmail(email))
        return res.status(400).json({msg: "Please enter a valid email"})

      const appointment = new Appointments({
        user: req.user_id,
        name,
        email,
        services,
        date
      })

      await appointment.save()
      res.json({msg: "Thanks for consulting your doctor. We will get back to you."})

    }catch(err) {
      return res.status(500).json({msg: err.message})
    }
  }),


  // @desc    Update an Appointment
  // @route   POST /api/appointments/:id
  // @access  Private
  updateAppointment: asyncHandler (async (req, res) => {
    try {
      const { name, email, services, date } = req.body;

      if (!name || !email || !services || !date)
        return res.status(400).json({msg: "All field inputs are required"})

      if (!validateEmail(email))
        return res.status(400).json({msg: "Please enter a valid email"})

      await Appointments.findOneAndUpdate({_id: req.params.id}, {
        name,
        email,
        services,
        date
      })
      res.json({msg: "Your appointment is updated"})
    }catch(err) {
      return res.status(500).json({msg: err.message})
    }
  }),

  // @desc    Delete an Appointment
  // @route   DELETE /api/appointments/:id
  // @access  Private
  deleteAppointment: asyncHandler (async (req, res) => {
    try {
      await Appointments.findOneAndDelete(req.params.id)
      res.json({msg: "Your appointment is Deleted"})
    }catch(err) {
      return res.status(500).json({msg: err.message})
    }
  })

}


// Email validatin helper functions
function validateEmail(email) {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(email);
}


module.exports = appointmentCtrl;
