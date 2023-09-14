// model

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,

    },
    payment: {
        type: Boolean,
        default: false,
        // required:true
    },
    plan: {
        type: Boolean,
        default: false,
        // required:true
    }



});


const MyPayment = mongoose.model('MyPayment', paymentSchema);

//exporting
module.exports = MyPayment;
