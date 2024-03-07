import React, { useState } from 'react'
import Header from './Header'
import { alert } from '../Utils/Constants';

const Login = () => {
  
  const [Login , setLogin]=useState(true);
  const SignInForm=()=>{
    setLogin(!Login);
  }
  
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg'
      alt=''></img>
      </div>
      <form className='w-96 bg-black absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='text-white text-4xl'>{Login? "Sign In" :"Sign Up"}</h1>
        {!Login && <input className='p-2  mt-6 w-72 rounded-md bg-gray-700' type='text' placeholder='Enter a Name'></input>}
        <input className='p-2 mt-6 w-72 rounded-md bg-gray-700' type='text' placeholder='Enter a email/Phone number'></input>
        <input className='p-2  mt-6 w-72 rounded-md bg-gray-700' type='password' placeholder='Enter password'></input>
        <button className='p-2 mt-8 w-72 bg-red-600 rounded-lg' type='submit'>{Login? "Sign In" :"Sign Up"}</button>
        <p className='mt-9 text-gray-500'>{Login? "New to Netflix?" :"Already a user?"}<span className='font-semibold text-white cursor-pointer p-1' onClick={SignInForm}>{Login? "Sign Up" :"Sign In"}</span></p>
      </form>
    </div>
  )
}

export default Login
