import React from 'react'
import { useState } from 'react'
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate }  from 'react-router-dom';
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

function PaymentForm() {
    // const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const navigate = useNavigate();
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
                const response = await axios.post("my_Api/payment", {
                    amount: 10000,
                    id
                }, {
                    headers: {
                        "x-access-token": localStorage.getItem("token")
                    }
                });
                // console.log("check f0r payment strip",response.data)
                //  console.log(response.data)
         
                // if (response.data.payment === true) {
                //     console.log("Successful Payment")
                    // setSuccess(true)
                    // await response.promise;
                    navigate("/profile")
                    window.location.reload(true);

                    // window.location.reload(true);

                // }

            } catch (error) {
                console.log("Error response isnt here", error)
            }
        } else {
            console.log("show error message")  
        }

    }
    return (
        <>
            {
                <form onSubmit={handleSubmit}  >
                    <fieldset className='FormGroup'>
                        <div className="FormRow">
                            <CardNumberElement />
                        </div>
                    </fieldset>
                    <fieldset className='FormGroup'>
                        <div className="FormRow">
                            <CardExpiryElement />
                        </div>
                    </fieldset>
                    <fieldset className='FormGroup'>
                        <div className="FormRow">
                            <CardCvcElement  />
                        </div>
                    </fieldset>
                    <Button className="custom-button " type='submit' variant="primary" size='lg'>Pay</Button>

                </form>
            
            }
        </>
    )
}

export default PaymentForm;