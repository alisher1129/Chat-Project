import React from 'react'
import { useState } from 'react';
import Stripe from './StripeOne/StripePayment';
import MyStripe from './StripeTwo/StripePaymentTwo';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function StripePage() {

    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    return (

        <>
            <div className='set-heading'><h3>Please Select Your Desired Plan</h3></div>

            <div className='stripe-plan'>


                <div className="plan-button">
                    < Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>BASIC</Card.Title>
                            <Card.Text>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                            </Card.Text>
                            {showOne ? <Stripe /> : <><h3>$100.00</h3><Button className="custom-button " onClick={() => setShowOne(true)} type='submit' variant="primary" size='lg'>One Day</Button></>}
                        </Card.Body>
                    </Card>




                </div>
                <div className="plan-button">
                    < Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>PROFESSIONAL</Card.Title>
                            <Card.Text>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                            </Card.Text>
                            {showTwo ? <MyStripe /> : <><h3>$200.00</h3> <Button className="custom-button " onClick={() => setShowTwo(true)} type='submit' variant="primary" size='lg'>Two Day</Button></>}
                        </Card.Body>
                    </Card>

                </div>


            </div>



        </>
    )
}

export default StripePage