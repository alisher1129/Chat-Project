const mongoose = require("mongoose");


// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017/DataBase';


// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
}).then(() => {
  console.log("DataBase is Connected")
}).catch((err) => {
  console.log(err)
});

// Export the mongoose connection
module.exports = mongoose.connection;