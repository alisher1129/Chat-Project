// const { Router } = require('express');
const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController")


//routes
route.post("/register",userController.createUsers);


module.exports = route;