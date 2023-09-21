const { StripePayment } = require("../services/stripeService")



class stripeController { 
    async makePayment(req, res) {
        try {
            console.log(req);
            const result = await StripePayment(req);
            console.log("Payment done Controller")
            console.log(result)
            res.status(200).json(result);
            
        } catch (error) {
            // console.log(error);
            console.log("Error UnPaid")
        }
    }

    
}

module.exports = new stripeController();