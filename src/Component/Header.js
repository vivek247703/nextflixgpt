import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const signout = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-screen px-4 py-4 bg-gradient-to-b from-gray-950 z-10 flex justify-between'>
      <img className='w-64 h-20' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt=''></img>
      {user && 
      <div>
        <button className='bg-red-500 text-white font-bold p-2 m-2 rounded-lg' onClick={signout}>Sign out</button>
        <span>{user?.displayName}</span>
      </div>
        
      }
    </div>

  )
}

export default Header
