import { useFormik } from 'formik'
import React from 'react'
import { signUpSchemas } from '../schemas/LoginYup';
import axios from "axios";
import {useNavigate} from 'react-router-dom'



const initialValues = {
  email: "",
  password: "",

}


function UserLogin() {

  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchemas,
    onSubmit: (values, action) => {
      axios.post("http://localhost:4000/login", {
        email: values.email,
        password: values.password,

      }).then((res) => {
        console.log("Backend Connected");
        navigate('/payment')
      
      }).catch((err) => console.log("Not Connected", err))
      action.resetForm();
    },

  });
  return (
    <>
      <form onSubmit={handleSubmit} >


        <div>
          <label>Email</label>
          <br />
          <input type='email'
            autoComplete='off'
            name='email'
            id='email'
            placeholder='Email'
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
          <button type='submit'>Login</button>
        </div>
      </form>

    </>
  )
}

export default UserLogin








