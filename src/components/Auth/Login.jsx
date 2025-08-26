import React, { useState } from 'react'


const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler=(e)=>{
        e.preventDefault()
        // console.log("email is ",email)
        // console.log("password is ",password)
        // console.log("Form Submitted Successfully..!")
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='h-screen w-screen flex bg-[#F2F9EF] items-center justify-center p-8 '>
      <div className='hover:shadow-xl rounded-xl bg-white flex flex-col items-center w-[400px] pl-8 pr-8 pt-12 pb-12 space-y-2 '>
            <h3 className='text-4xs text-black font-sans'>Welcome Back To</h3>
             <h3 className='text-4xl text-blue-500 font-bold'>TaskPilot-Pro</h3>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center w-full space-y-5 '>
            <h3 className='text-4xs text-black font-sans'>Enter your login credentials:</h3>

            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required className='
               w-full px-3 py-2.5 
               rounded-sm
               shadow-sm 
               focus:shadow-xl 
               focus:outline-none 
               border-none
               transition'
             
            type="email" placeholder='enter your email'/>

            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className='     
               w-full px-3 py-2.5 
               rounded-sm
               shadow-sm 
               focus:shadow-xl 
               focus:outline-none 
               border-none
               transition'
            
            type="password" placeholder='enter your password' />

            <button className='bg-blue-500 rounded font-serif hover:shadow-xl hover:bg-black mt-10 text-xl py-2 pb-2.5 px-10 w-full font-medium text-white'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
