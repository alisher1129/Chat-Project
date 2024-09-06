import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';



function SideBar({ children }) {
  const navigate = useNavigate();
const auth = JSON.parse(localStorage.getItem('auth'))

  function logout() {

    const token = localStorage.getItem('token')
    // Remove the token from local storage
    localStorage.removeItem('token');
    console.log("user logged out ")
    localStorage.setItem('auth', JSON.stringify(false))
    navigate('/')


  }




  return (
    <>

      <div>

        {/* {auth ? ( */}
          <div>
            <Navbar bg="light" data-bs-theme="light">
              <Container>
                <Navbar.Brand href="#home">ASR</Navbar.Brand>
                <Nav className="me-auto">
                  <NavLink className={'nav-link'} to="/userhome">Home</NavLink>
                  <NavLink className={'nav-link'} to="/profile">Profile</NavLink>
                  <NavLink className={'nav-link'} to="/create">Create Post</NavLink>
                  <NavLink className={'nav-link'} to="/messenger">Messenger</NavLink>

                </Nav>
                <Button onClick={logout} variant="dark">Logout</Button>

              </Container>
            </Navbar>
            <main>{children}</main>
          </div>
           {/* ):(<div></div>) } */}
      </div>

    </>

  );
}

export default SideBar