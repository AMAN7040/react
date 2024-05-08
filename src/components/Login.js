import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 character , 1 upper case letter , 1 lower case letter , 1 digit

const schema = Yup.object().shape({
    email: Yup.string()
          .required('Email is required')
          .email('Invalid email format'),
    password: Yup.string()
             .required('password is required')
             .min(5, 'password must be atleast 5 characters')
             .matches(passwordRules, {message: 'Please create a stronger password'}),
});

const Login = () => {

    const navigate = useNavigate();

    const handleNavigate = (values) => {
        // Your form submission logic goes here
        console.log(values);
        
        setTimeout(() => {
            navigate("/");
          }, 0);
      
       
    }
  return (
    <>
     <Formik
     validationSchema={schema}
     initialValues={{email:'', password:''}}
     onSubmit={(values)=>{
        handleNavigate(JSON.stringify(values));

     }}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
        })=>(
            <div className='login-container'>
             <div className='login-form'>
             <form noValidate onSubmit={handleSubmit} onReset={handleReset}>
                <input 
                   type='email'
                   name='email'
                   placeholder='Enter your email'
                   id='email'
                   className={`email ${errors.email && touched.email ? 'input-error' : ''}`}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.email}
                 />

                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input 
                   type='password'
                   name='password'
                   className={`password ${errors.password && touched.password ? 'input-error' : ''}`}
                   placeholder='Enter your password'
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.password}
                 />

                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>         
        
                <button className='submit' type='submit'>Login</button>
        
              </form>
             </div>
            </div>
        )}

     </Formik>
    </>
  )
}

export default Login;
