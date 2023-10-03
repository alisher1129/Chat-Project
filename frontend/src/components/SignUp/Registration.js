import { useFormik } from 'formik'
import { Link } from "react-router-dom";
import React from 'react'
import { signUpSchemas } from '../schemas/SignUpYup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import UserLogin from '../Login/UserLogin';
import Button from 'react-bootstrap/Button';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';




const initialValues = {
    name: "",
    email: "",
    password: "",
    mobile: "",
}
function Registration() {
    const navigate = useNavigate();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchemas,
        onSubmit: (values, action) => {
            axios.post("http://localhost:4000/register", {
                username: values.name,
                email: values.email,
                mobile: values.mobile,
                password: values.password,

            }).then((res) => {
                navigate('/login')
                console.log("Registered Successfully,Now You Have to Login First!")
            }).catch((err) => { console.log("Not Registered, Please Registered  Again", err) })

            // console.log("Value of form ", values);
            action.resetForm();
        },

    });
    return (
        <>
            {/* <div className='login-container'>

                <div><h1>Sign Up</h1></div>
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
                            placeholder='name@example.com'
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
                        <Button className="custom-button " type='' variant="primary" size='lg'>Registration</Button>

                    </div>
                </form>

            </div> */}


            {/* try  */}

            <form onSubmit={handleSubmit} >
                <MDBContainer fluid className="p-3 my-5 ">

                    <MDBRow>

                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Phone image" />
                        </MDBCol>

                        <MDBCol col='4' md='6'>
                            <div>

                                <label>Username</label>
                                <MDBInput wrapperClass='mb-4'
                                    type='text'
                                    autoComplete='off'
                                    name='name'
                                    id='name'
                                    placeholder='Username'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur} size="lg" />
                                {errors.name && touched.name ?
                                    <p>{errors.name}</p> : null}
                            </div>

                            <div>

                                <label>Email Address</label>
                                <MDBInput wrapperClass='mb-4'
                                    type='email'

                                    name='email'
                                    id='email'
                                    placeholder='name@example.com'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur} size="lg" />
                                {errors.email && touched.email ? <p>{errors.email}</p> : null}
                            </div>
                            <div>
                                <label>Mobile</label>

                                <MDBInput wrapperClass='mb-4' type='password'
                                    autoComplete='off'
                                    name='mobile'
                                    id='mobile'
                                    placeholder='Mobile Number'
                                    value={values.mobile}
                                    onChange={handleChange}
                                    onBlur={handleBlur} size="lg" />
                                {errors.mobile && touched.mobile ? <p>{errors.mobile}</p> : null}
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


                            <MDBBtn className="mb-0 px-5" type='submit' size='lg'>Sign Up</MDBBtn>







                        </MDBCol>

                    </MDBRow>

                </MDBContainer>


            </form>


        </>
    )
}

export default Registration
