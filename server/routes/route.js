// const { Router } = require('express');
const express = require("express");
const route = express.Router();


const userController = require("../controllers/userController")
const loginController = require("../controllers/loginController")
const stripeController = require("../controllers/stripeController")
const postController = require("../controllers/postController")



//routes
route.post("/register", userController.createUsers);
route.get("/verify", userController.verifyEmail)
route.post("/login", loginController.LoginUser)
route.post("/payment", stripeController.makePayment)
route.post("/createPost",postController.postUser)
route.get("/getuserpost/:userId",postController.getUserPost)
route.get("/getuser/:userId", userController.getUserData);

//Post Routes

module.exports = route;