const userModel = require("../models/userModel")
const MyPayment = require("../models/StripeModel/stripeModel")
const stripe = require("stripe")("sk_test_51NkkwXAXUbI3cuY9sR8i98U3S3jaRucU6KMmWQWJjRnpkq7rMNUIWixeFgiRNU1ZNBcwrDH3lbfEWyBixIm34ATE00IyNMDnXP")
const jwt = require('jsonwebtoken');

class stripeData {

    async StripePayment(req, res) {
        let { amount, id } = req.body;

        try {
            const payment = await stripe.paymentIntents.create({

                amount,
                currency: "USD",
                description: "Payment",
                payment_method: id,
                confirm: true,
                automatic_payment_methods: {
                    enabled: true,
                    allow_redirects: 'never'
                }
            })
            const token = req.headers['x-access-token'];
            const val = jwt.decode(token);
            console.log(val.id)
            
            console.log("val", val);
            const paymentDone = MyPayment({
                userId: val.id,
                payment: true,
                plan: true,
            })

            res.status(200).json("payment successfully send ")
            await paymentDone.save().then(() => 
            console.log("Payment  Done" ));

            // res.json({
            //     message: "Payment was successful",
            //     success: true
            // })





        } catch (error) {
            console.log("Error", error)
            // res.json({
            //     message: "Payment Failed",
            //     success: false
            // })
        }
    }
}

module.exports = new stripeData();
