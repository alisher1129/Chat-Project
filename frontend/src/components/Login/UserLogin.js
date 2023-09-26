import { useFormik } from 'formik'
import React, { createContext, useContext } from 'react'
import { signUpSchemas } from '../schemas/LoginYup';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
// import UserProfile from '../User Profile/UserProfile';
import { UserContext } from '../Context/UserContext';
import { PostContext } from '../Context/PostContext';
// import { useJwt } from "react-jwt"
import { decodeToken } from "react-jwt";
import Button from 'react-bootstrap/Button';





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
      axios.post("http://localhost:4000/login", {
        email: values.email,
        password: values.password,
      }).then((res) => {
        localStorage.setItem('token', res.data.token);
        if (res.data.paymentStatus) {
          navigate('/profile')
        }
        else {
          navigate('/payment')
        }

      }).catch((err) => {
        console.log("Please login Again !", err)
        navigate('/login')
      })
      action.resetForm();
    },

  });
  return (
    <>
      <div className='login-container'> 
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
        </div>


    </>
  )
}

export default UserLogin








