// models/user.js

const mongoose = require('mongoose');

// Define a User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
  }, 
  password: {
    type: String,
    required: true,
  },
 
  // ...
});

// Create a User model
const User = mongoose.model('User', userSchema);

//exporting
module.exports = User;
