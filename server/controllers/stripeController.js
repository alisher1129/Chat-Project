const { StripePayment } = require("../services/stripeService")



class stripeController {
    async makePayment(req, res) {
        try {
            console.log(req.body);
            const result = await StripePayment(req.body);
            res.json(result);
            console.log("Payment Done")
        } catch (error) {
            console.log(error);
            console.log("Error UnPaid")
        }
    }

    // async verifyEmail(req, res) {
    //     try {
    //         const Email = await VerifyEmail(req)
    //         res.send("Thanks For Verification")
    //     }
    //     catch
    //     {
    //         (error) => console.log(error)
    //     }
    // }
}

module.exports = new stripeController();