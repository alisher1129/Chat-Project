import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>

 <Link to="/signup" >Sign Up</Link>
 <br></br>
 <br></br>
 <Link to="/login" >Login</Link>

    </div>
  )
}

export default HomePage