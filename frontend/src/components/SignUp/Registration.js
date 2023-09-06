import { useFormik } from 'formik'
import { Link } from "react-router-dom";
import React from 'react'
import { signUpSchemas } from '../schemas/SignUpYup';
import axios from "axios";
// import UserLogin from '../Login/UserLogin';


const initialValues = {
    name: "",
    email: "",
    password: "",
    mobile: "",
}
function Registration() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchemas,
        onSubmit: (values, action) => {
            axios.post("http://localhost:4000/register", {
                username: values.name,
                email: values.email,
                mobile: values.mobile,
                password: values.password,

            }).then((res) => console.log("Backend Connected")).catch((err) => console.log("Not Connected", err))

            // console.log("Value of form ", values);
            action.resetForm();
        },

    });
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Username</label>
                    <br />
                    <input type='text'
                        autoComplete='off'
                        name='name'
                        id='name'
                        placeholder='Name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {errors.name && touched.name ?
                        <p>{errors.name}</p> : null}
                </div>

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
                    <label>Mobile</label>
                    <br />
                    <input type='text'
                        autoComplete='off'
                        name='mobile'
                        id='mobile'
                        placeholder='Mobile Number'
                        value={values.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.mobile && touched.mobile ? <p>{errors.mobile}</p> : null}

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

                    <Link to="/login">Login </Link>



                    if Already Have an Account ?


                    
                    <br />
                    <button type=''>Registration</button>
                </div>
            </form>

        </>
    )
}

export default Registration