// const { Router } = require('express');
const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController")
const loginController = require("../controllers/loginController")


//routes
route.post("/register",userController.createUsers);
route.get("/verify",userController.verifyEmail)
route.post("/login",loginController.LoginUser)


module.exports = route;