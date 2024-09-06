const User = require('../models/userModel/userModel');
const MyPayment = require("../models/StripeModel/stripeModel")
const postModel = require("../models/PostModel/postModel");
const jwt = require('jsonwebtoken');


class LoginService {
    async loginUser(req, res) {
        try {
            const user = await User.findOne({
                email: req.body.email
            });


            if (user && user.password === req.body.password) {
                var paymentStatus = false;
                const token = jwt.sign({
                    id: user._id,
                    username: user.username,
                }, 'secret_123',
                    {
                        expiresIn: 3600
                    })


                const checkUser = await MyPayment.findOne({
                    userId: user._id
                })

                console.log("what is checkUser", checkUser)
            
                if (checkUser) {
                    if (checkUser.payment === true) {
                        var paymentStatus = true;
                        console.log("Paid User")

                    }
                    else {
                        console.log("unpaid User")


                    }
                }
                else {
                     var paymentStatus = false;
                    console.log("User not found in MyPayment schema");
                }



                return { user, token: token, paymentStatus: paymentStatus };
            }
            else {

                console.log("wrong password");

            }
        }


        catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoginService();