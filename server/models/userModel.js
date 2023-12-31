// models/user.js

const mongoose = require('mongoose');

// Define a User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    // required: true,

  },
  username: {
    type: String,
    // required: true,

  },
  mobile: {
    type: Number,
    // required: true,

  },
  password: {
    type: String,
    // required: true,
  },
  token: {
    type: String
  },
  isVerified: {
    type: Boolean,
    // default: false
  },
 


});

// Create a User model
const User = mongoose.model('User', userSchema);

//exporting
module.exports = User;
