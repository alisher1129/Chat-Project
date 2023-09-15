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


            await paymentDone.save().then((res) => {
                console.log("Payment Done")
                res.status(200).json("Payment successfully sent")
            }).catch((err) => {
                console.log("not save Error saving payment data:", err);
                res.status(500).json("Internal server error");
            })
        } catch (err) {
            console.log("Error saving payment data:", err);
            res.status(500).json("Internal server error");
        }
    }
}

module.exports = new stripeData();
