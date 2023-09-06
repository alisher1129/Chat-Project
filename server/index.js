const route = require("./routes/route");
const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));

// require("./MailSend/SendGrid")

app.use(cors());
app.use("/", route);
require('./config/db')
// require("./models/userModel");


app.listen(4000, () => {
    console.log("Server is Working")
})