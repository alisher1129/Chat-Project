import React from 'react'
import  StripeFormTwo  from "./StripeFormTwo"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51NkkwXAXUbI3cuY9X4Z09hlA0sQiUX8ifWVYwRtNgzV5GMbPBH8tjUMgpSfyTa8UDIo98o3EQa6qIEXIDza3LVft00BViHwlUw")

function MyStripe() {
  return (
   <div>
    <Elements stripe={stripePromise}>
        <StripeFormTwo />
    </Elements>
   
   </div>
   )
}

export default MyStripe