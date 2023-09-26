import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom' 



function HomePage() {


  return (
    <div className="home-container" >
      <Button className="custom-button " variant="primary" size='lg'><Link to="/signup" >Sign Up</Link></Button>
      <br></br>
      <br></br>
      <Button className="custom-button" variant="success" size='lg' ><Link to="/login" >Login</Link></Button>
      
      

    </div>
  )
}

export default HomePage   