import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg'
      alt=''></img>
      </div>
      <form className='w-3/12 bg-black absolute p-12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='text-white text-xl font-bold'>Sign In</h1>
        <input className='p-2 m-2' type='text' placeholder='Enter a email/Phone number'></input>
        <input className='p-2 m-2' type='password' placeholder='Enter apassword'></input>
        <button className='p-2 m-2 bg-red-600 rounded-lg' type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Login
