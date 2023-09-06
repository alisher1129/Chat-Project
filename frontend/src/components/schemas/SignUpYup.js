import * as Yup from "yup";

export const signUpSchemas = Yup.object({
    name: Yup.string().min(3).max(20).required("Please Enter Your Name "),
    email: Yup.string().email().required("Please Enter Your Email"),
    mobile:Yup.string().min(11).required("Digits must be 11"),
    password: Yup.string().min(6).required("Please Enter Your Password")
   
    
});