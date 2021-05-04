
const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})


module.exports = mongoose.model("Blog", blogSchema);
