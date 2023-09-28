// const { Router } = require('express');
const express = require("express");
const route = express.Router();


const userController = require("../controllers/userController")
const loginController = require("../controllers/loginController")
const stripeController = require("../controllers/stripeController")
const postController = require("../controllers/postController")
const conversationController = require("../controllers/conversationController")
const messageController = require("../controllers/messagecontroller")



//routes
route.post("/register", userController.createUsers);
route.get("/verify", userController.verifyEmail)
route.post("/login", loginController.LoginUser)
route.post("/payment", stripeController.makePayment)
route.post("/createPost",postController.postUser)
route.get("/getuserpost/:userId",postController.getUserPost)
route.get("/getuser/:userId", userController.getUserData);
route.get("/getalluser", postController.getAllUserPost);
route.post("/searchuser",postController.showAllUser)
route.get("/allusers",userController.getAlluserDat)

//message routers
route.post('/conversation', conversationController.createNewConversation);
route.get('/conversation/:userId', conversationController.getConversations);
route.post('/sendmessage', messageController.sendMessage);
route.get('/getmessage/:conversationId', messageController.getMessage);





//Post Routes

module.exports = route;