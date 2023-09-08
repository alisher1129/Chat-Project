import React from 'react'
import { useState } from 'react';
import Stripe from './StripePayment';
function StripePage() {

    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    return (

        <>

            <div className="App">
                {showOne ? <Stripe /> : <><h3>$100.00</h3><button onClick={() => setShowOne(true)}>One Day Plan</button></>}
            </div>
            <div className="App">
                {showTwo ? <Stripe /> : <><h3>$200.00</h3> <button onClick={() => setShowTwo(true)}>Two Day Plan</button></>}
            </div>



        </>
    )
}

export default StripePage