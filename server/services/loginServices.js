const User = require('../models/userModel');
const MyPayment = require("../models/StripeModel/stripeModel")
const postModel = require("../models/PostModel/postModel");
const jwt = require('jsonwebtoken');


class LoginService {
    async loginUser(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email
            });
            

            if (user.password === req.body.password) {
                var paymentStatus = false;
                const token = jwt.sign({ id: user._id }, 'secret_123',
                    {
                        expiresIn: 3600
                    })
                console.log(token);
                const checkUser = await MyPayment.findOne({
                    userId: user._id
                })

                if (checkUser) {
                    if (checkUser.userId) {
                        paymentStatus = true;
                        console.log("Paid User")

                    }
                    else {
                        console.log("unpaid User")

                    }
                }

                return { user ,token: token, paymentStatus: paymentStatus };
            }
            else {
                // res.send("Welcome User Profile")
                console.log("wrong password");

            }
        }


        catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoginService();