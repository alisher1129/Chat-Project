import React from 'react'
import { useState } from 'react';
import Stripe from './StripeOne/StripePayment';
import MyStripe from './StripeTwo/StripePaymentTwo';
import { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';






function StripePage() {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const auth = JSON.parse(localStorage.getItem('auth'));
    

    useEffect(()=>{
        if(currentUser == false){
            navigate("/")
          }
    },[])
    



    function logout() {

        const token = localStorage.getItem('token')
        // Remove the token from local storage
        localStorage.removeItem('token');
        console.log("user logged out ")
        localStorage.setItem('auth', JSON.stringify(false))
        navigate('/')


    }


    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    return (

        <> 
            <Navbar bg="light" data-bs-theme="light">
                <Navbar.Brand style={{marginLeft:'30px'}} href="#home">ASR</Navbar.Brand>
                <Nav className="me-auto">
                    
                </Nav>
                <Button style={{marginRight:"40px"}} onClick={logout} variant="dark">Logout</Button>


            </Navbar>

            <div ><h3>Please Select Your Desired Plan</h3></div>

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