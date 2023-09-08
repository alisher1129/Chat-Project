// model

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,

    },

    Payment: {
        type: Boolean,
        default: false
    }
    ,

    Plan: {
        type: Number
    }

});


const MyPayment = mongoose.model('Payment', paymentSchema);

//exporting
module.exports = MyPayment;
