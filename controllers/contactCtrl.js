
const Contacts = require("../models/contactModel");
const asyncHandler = require("express-async-handler");


const contactCtrl = {
  // @desc    Send contact
  // @route   POST /api/contact
  // @access  Public
  createContact: asyncHandler (async (req, res) => {
    try {
      const { name, email, website, message } = req.body;

      if (!name || !email || !website || !message)
        return res.status(400).json({msg: "All fields are required"})

      if (!validateEmail(email))
        return res.status(400).json({msg: "Please enter a valid email"})

      const contact = new Contacts({
        name: name,
        email: email,
        website: website,
        message: message
      })

      await contact.save()
      res.json({msg: "Thanks for contacting us. We will get back to you."})

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


module.exports = contactCtrl;
