const route = require("./routes/route");
const express = require("express");
const app = express();
//cloudinary
// const fileUpload = require("express-fileupload");

app.use(express.json());
const cors = require("cors");
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));

// require("./MailSend/SendGrid")



app.use(cors());
app.use("/", route);
//cloudinary
// app.use(fileUpload({ useTempFiles: true }));
require('./config/db')
// require("./models/userModel");


app.listen(4001, () => {
    console.log("Server is Working")
})