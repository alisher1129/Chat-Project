import { useFormik } from 'formik'
import React, { createContext, useContext } from 'react'
import { signUpSchemas } from '../schemas/LoginYup';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import UserProfile from '../User Profile/UserProfile';
import { UserContext } from '../Context/UserContext';
import { PostContext } from '../Context/PostContext';
// import { useJwt } from "react-jwt"
import { decodeToken } from "react-jwt";
import Button from 'react-bootstrap/Button';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Login.css';






const initialValues = {
  email: "",
  password: "",

}
function UserLogin() {
  // const { postId, setPostId } = useContext(PostContext)
  // const { decodedToken, isExpired } = useJwt(token);
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchemas,
    onSubmit: (values, action) => {
      axios.post("http://localhost:3000/login", {
        email: values.email,
        password: values.password,
      }).then((res) => {
        console.log("res for login check", res)
        localStorage.setItem('token', res.data.token);
      

        if (res.data.paymentStatus === true) {
          localStorage.setItem('auth', JSON.stringify(true))
          navigate('/profile')
        }
        else {
          navigate('/payment')
        }

      }).catch((err) => {
        console.log("Please login Again !", err)
        navigate('/')
      })
      action.resetForm();
    },

  });




  return (
    <>
      {/* <div className='login-con'>
        <div><h1>Login</h1></div>
        <form onSubmit={handleSubmit} >


          <div>
            <label>Email Address</label>
            <br />
            <input type='email'
              autoComplete='off'
              name='email'
              id='email'
              placeholder='name@example.com'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}

            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}

          </div>

          <div>
            <label>Password</label>
            <br />
            <input type='password'
              autoComplete='off'
              name='password'
              id='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? <p>{errors.password}</p> : null}

          </div>

          <div>
            <br />
            <Button className="custom-button " type='submit' variant="primary" size='lg'>Login</Button>


          </div>
        </form>
      </div> */}


      {/* use mdb design  */}
      <form onSubmit={handleSubmit} >
        <MDBContainer fluid className="p-3 my-5 ">

          <MDBRow>

            <MDBCol col='10' md='6'>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Phone image" />
            </MDBCol>

            <MDBCol col='4' md='6'>
              <div>

                <label>Email Address</label>
                <MDBInput wrapperClass='mb-4' type='email'
                  autoComplete='off'
                  name='email'
                  id='email'
                  placeholder='name@example.com'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} size="lg" />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>
              <div>
                <label>Password</label>

                <MDBInput wrapperClass='mb-4' type='password'
                  autoComplete='off'
                  name='password'
                  id='password'
                  placeholder='Password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur} size="lg" />
                {errors.password && touched.password ? <p>{errors.password}</p> : null}

              </div>






              {/* <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: "blue" }}>
              Login
            </MDBBtn> */}

              <MDBBtn className="mb-0 px-5" type='submit' size='lg'>Login</MDBBtn>
              <div className='text-center text-md-start mt-4 pt-2'>

                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/signup" className="link-danger">Register</Link></p>
              </div>



              {/* <div className="divider d-flex align-items-center my-4">
                <p className="or">OR</p>
              </div>

              <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Continue with facebook
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                <MDBIcon fab icon="twitter" className="mx-2" />
                Continue with twitter
              </MDBBtn> */}

            </MDBCol>

          </MDBRow>

        </MDBContainer>


      </form>



    </>
  )
}

export default UserLogin








