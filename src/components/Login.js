import React from 'react'
import { Formik } from 'formik';

const Login = () => {
    
  return (
    <form>
        <label htmlFor='email'>Email</label>
        <input id='email' placeholder='Enter your Email'/>
    </form>
  )
}

export default Login;
