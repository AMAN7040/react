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
            <div className='flex justify-center items-center p-5 m-5'>
             <div className='m-5 p-5'>
             <form noValidate onSubmit={handleSubmit} onReset={handleReset}>
                <input 
                   type='email'
                   name='email'
                   placeholder='Enter your email'
                   id='email'
                   className={`h-10 w-100 m-8 p-2 rounded-md text-center ${errors.email && touched.email ? 'border-red-600' : ''}`}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.email}
                 />

                <p className="text-red-500 font-semibold text-lg ml-8">
                  {errors.email && touched.email && errors.email}
                </p>
                <input 
                   type='password'
                   name='password'
                   className={`h-10 w-100 m-8 p-2 rounded-md text-center ${errors.password && touched.password ? 'border-red-600' : ''}`}
                   placeholder='Enter your password'
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.password}
                 />

                <p className="text-red-500 font-semibold text-lg ml-8">
                  {errors.password && touched.password && errors.password}
                </p>         
        
                <button className='h-10 w-20 bg-blue-500 rounded-lg m-5 ml-20 mt-8' type='submit'>Login</button>
        
              </form>
             </div>
            </div>
        )}

     </Formik>
    </>
  )
}

export default Login;
