import React from 'react'
import { useState } from 'react'
const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
        e.preventDefault()

        handleLogin(email,password)
        
        setEmail("")
        setPassword("")
  }
  return (
    <>
    <div className =" flex  h-screen w-screen justify-center items-center">
    
      <div className='border-2 rounded-xl border-emerald-400 px-15 py-20'>
          <h1 className='text-5xl mb-10 ml-5 text-emerald-200'>Login Page</h1>
           <form 
         onSubmit={(e)=>{
            submitHandler(e)
         }}
                 
        className=' gap-6 flex flex-col justify-center items-center'
         >
        <input
        value = {email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         required className='outline-none border-2 border-emerald-200 placeholder:text-white bg-transparent rounded-full px-10 py-3' type="email" placeholder='Enter your email' 
         />
         <input 
         value={password}
         onChange={(e)=>{
             setPassword(e.target.value)
         }}
         className='border-2 outline-none border-emerald-200 placeholder:text-white bg-transparent rounded-full px-10 py-3' type="password" placeholder='Enter your password' />
         <button className=' px-28 py-2   bg-green-400 rounded-full border-none outline-none text-white cursor-pointer hover:bg-emerald-700'>Sign in</button>
         </form>
      </div>

    </div>
    </>
  )
}

export default Login