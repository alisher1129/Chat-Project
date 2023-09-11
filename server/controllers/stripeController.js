const { StripePayment } = require("../services/stripeService")



class stripeController { 
    async makePayment(req, res) {
        try {
            console.log(req);
            const result = await StripePayment(req);
            // res.json(result);
            console.log("Payment done done")
        } catch (error) {
            console.log(error);
            console.log("Error UnPaid")
        }
    }

    
}

module.exports = new stripeController();