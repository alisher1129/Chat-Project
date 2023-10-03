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


            if (user && user.password === req.body.password) {
                var paymentStatus = false;
                const token = jwt.sign({
                    id: user._id,
                    username: user.username,
                }, 'secret_123',
                    {
                        expiresIn: 3600
                    })
                console.log(token);
                console.log("during login check user", user)

                const checkUser = await MyPayment.findOne({
                    userId: user._id
                })

                console.log(checkUser)


                if (checkUser) {
                    if (checkUser.payment === true) {
                        paymentStatus = true;
                        console.log("Paid User")

                    }
                    else {
                        console.log("unpaid User")
                        

                    }
                }
                else {
                    paymentStatus = false;
                    console.log("User not found in MyPayment schema");
                }

                console.log("just check user is available or not", checkUser)
                console.log("checkuserPayment", checkUser.payment);

                return { user, token: token, paymentStatus: paymentStatus };
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