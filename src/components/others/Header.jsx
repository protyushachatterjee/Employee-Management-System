import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({data, changeUser}) => {

const logOut= ()=>{
  localStorage.setItem('loggedInUser', '')
  // window.location.reload()
  changeUser("")
}

  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Hello, <br /> <span className='text-3xl font-semibold'> User👋</span> </h1>
        <button onClick={logOut} className='bg-red-600 text-lg rounded-md text-white px-4 py-2'>Log Out</button>

    </div>
  )
}

export default Header