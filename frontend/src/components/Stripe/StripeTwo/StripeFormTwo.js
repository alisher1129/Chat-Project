import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


// const CARD_OPTIONS = {
//     iconStyle: "solid",
//     style: {
//         base: {
//             iconColor: "#c4f0ff",
//             color: "black",
//             fontWeight: 500,
//             fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//             fontSize: "16px",
//             fontSmoothing: "antialiased",
//             ":-webkit-autofill": { color: "black" },
//             "::placeholder": { color: "black" }
//         },
//         invalid: {
//             iconColor: "#ffc7ee",
//             color: "black"
//         }
//     }
// }

function PaymentFormTwo() {
    const navigate = useNavigate();
    // const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e, action) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardCvcElement, CardExpiryElement, CardNumberElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 20000,
                    id
                }, {
                    headers: {
                        "x-access-token": localStorage.getItem("token")
                    }
                })
                console.log(response.data.payment)

                // if (response.data.payment) {
                //     console.log("Successful Payment")
                    // setSuccess(true)
                    navigate("/profile")

                // }
            }
            catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }

    }
    return (
        <>
            
                <form onSubmit={handleSubmit}  >
                    <fieldset className='FormGroup'>
                        <div className="FormRow">
                            <CardNumberElement  />
                        </div>
                    </fieldset>
                    <fieldset className='FormGroup'>
                        <div className="FormRow">
                            <CardExpiryElement />
                        </div>
                    </fieldset>
                    <fieldset className='FormGroup'>
                        <div className="FormRow">
                            <CardCvcElement />
                        </div>
                    </fieldset>
                    <Button className="custom-button " type='submit'  variant="primary" size='lg'>Pay</Button>
                </form>
                
        </>
    )
}

export default PaymentFormTwo;