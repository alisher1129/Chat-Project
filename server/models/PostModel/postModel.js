

const mongoose = require('mongoose');
// const {ObjectId} = mongoose.Schema.Types

// Define a Post schema
const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'

  },


  title: {
    type: String,
    // required: true,

  },
  photo: {
    type: String,
    default: "no photo"

  },
  comments: {
    type: String
  }
  // postedBy: {
  //   // type: ObjectId,
  //   // ref:"User"
  //   // required: true,
  // },



});

// Create a Post model
const Post = mongoose.model('Post', postSchema);

//exporting
module.exports = Post;
