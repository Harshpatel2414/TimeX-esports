"use client"
import { useAuth } from "@/context/AuthContext"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaEye } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa6"

const Login = () => {
  const [passview, setPassview] = useState('password')
  let { logIn } = useAuth()
  let passViewer = () => {
    if (passview == 'text') {
      setPassview('password')
    } else {
      setPassview('text')
    }
  }
  return (
    <div className="flex px-5 gap-0 flex-col lg:flex-row-reverse items-center lg:justify-around w-full py-20">
      <div className=" lg:w-1/3 drop-shadow-xl z-10 relative">
        <h1 className="text-3xl lg:text-4xl  drop-shadow-xl shadow-container font-bold tracking-wider">Welcome Back !</h1>
        <p className="texte-sm text-zinc-700">Login to get more information about tournaments</p>
        <Image width={384} height={384} quality={100} className="-mb-14 md:my-0 w-96 relative drop-shadow-xl shadow-black" src="/images/login.png" alt="" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4  px-5 py-10 bg-zinc-900 rounded-lg items-center">
          <span className=" font-bold text-xl mb-2">Login</span>
          <form onSubmit={logIn} className='flex flex-col gap-3 w-80 items-center'>
            <input className='p-2 w-full outline-none text-zinc-800 border-b-2 border-container' type="email" name='email' placeholder='email' required />
            <div className='flex items-center gap-2 bg-white w-full border-b-2 border-container'>
              <input className='p-2 w-full outline-none text-zinc-800 ' type={passview} name='password' placeholder='password' required />
              <FaEye onClick={passViewer} className='w-6 h-full text-zinc-700 mr-2' />
            </div>
            <button className='btn-secondary w-full'>Sign in</button>
          </form>
        </div>
        <div className="text-center flex flex-col items-center gap-2 mt-4">
          <span>or</span>
          <button className="btn-primary flex items-center gap-2 w-80 justify-center"><FaGoogle />Sign in with google</button>
          <p >You already have account? <Link className='text-container underline' href='/signup'> Signup</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
