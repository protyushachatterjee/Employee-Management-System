import React, { useState } from 'react'

const Login = ({handleLogin}) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const SubmitHandler=(e)=>{
    e.preventDefault()
   handleLogin(email, password);

    setEmail("");
    setPassword(""); 
}



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-md shadow-lg shadow-cyan-500/50 '>
            <form onSubmit={(e)=>{
                SubmitHandler(e)
            }} className='flex flex-col gap-3 items-center justify-center'>
                <input required value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} className='border-2 border-emerald-600 shadow-md shadow-cyan-500/50 rounded-full px-6 py-4 text-xl mb-2 outline-none bg-transparent placeholder:text-gray-500' type="email" placeholder='Enter Your email'/>
                <input required value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} className='border-2 border-emerald-600 shadow-md shadow-cyan-500/50 rounded-full px-6 py-4 text-xl  outline-none bg-transparent placeholder:text-gray-500' type="password" placeholder='Enter password'/>
                <button className='mt-3 border-2 border-none w-full hover:bg-emerald-700  bg-emerald-600 rounded-full px-10 py-2 text-xl  outline-none '>Log in</button>
            </form>

        </div>
    </div>
  )
}

export default Login