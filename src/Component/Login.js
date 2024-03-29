import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validation } from '../Utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adduser } from '../Utils/userSclice';


const Login = () => {
  
  const [Login , setLogin]=useState(true);
  const [Errormessage, setErrormessage]=useState(null)
  const SignInForm=()=>{
    setLogin(!Login);
  }
  const name = useRef(null);
  const email = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = ()=>{
    const message =  Validation(email.current.value, password.current.value)
    //setErrormessage(message)

    if(!Login){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
       photoURL: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais"
    }).then(() => {
      const {uid, email, displayName} = auth.currentUser;
      dispatch(adduser({
        uid: uid,
        email : email,
        displayName : displayName
      }));
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      // ...
      const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorMessage);
    });

  })
  .catch((error) => {
    // ..
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorMessage);
      });
    }
}
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg'
      alt=''></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-96 bg-black absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='text-white text-4xl'>{Login? "Sign In" :"Sign Up"}</h1>
        {!Login && <input ref={name} className='p-2  mt-6 w-72 rounded-md bg-gray-700' type='text' placeholder='Enter a Name'></input>}
        <input ref={email} className='p-2 mt-6 w-72 rounded-md bg-gray-700' type='text' placeholder='Enter a email/Phone number'></input>
        <input ref={password} className='p-2  mt-6 w-72 rounded-md bg-gray-700' autocomplete="off" type='password' placeholder='Enter password'></input>
        <p className='p-2 text-red-500 font-bold'>{Errormessage}</p>
        <button className='p-2 mt-8 w-72 bg-red-600 rounded-lg' type='submit' onClick={handleClick}>{Login? "Sign In" :"Sign Up"}</button>
        <p className='mt-9 text-gray-500'>{Login? "New to Netflix?" :"Already a user?"}<span className='font-semibold text-white cursor-pointer p-1' onClick={SignInForm}>{Login? "Sign Up" :"Sign In"}</span></p>
      </form>
    </div>
  )
}

export default Login
