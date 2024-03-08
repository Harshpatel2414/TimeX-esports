"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaEye } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa6"

const Login = () => {
  const [passview, setPassview] = useState('password')
  let passViewer = () => {
    if (passview == 'text') {
      setPassview('password')
    } else {
      setPassview('text')
    }
  }
  return (
    <div className="flex px-5 gap-0 flex-col bg-center bg-no-repeat lg:flex-row-reverse items-center lg:justify-around w-full py-20">
      <div className="mt-10 lg:w-1/3 drop-shadow-xl z-10">
        <h1 className="text-3xl lg:text-4xl  drop-shadow-xl shadow-container font-bold tracking-wider">Welcome Back !</h1>
        <p className="texte-sm text-zinc-700">Login to get more information about tournaments</p>
        <Image width={384} height={384} quality={100} className="-mb-14 md:my-0 w-96 relative drop-shadow-xl shadow-black" src="/images/login.png" alt="" />
      </div>
      <div className="w-fit items-center flex flex-col">
        <form className="flex drop-shadow-xl mb-4  lg:w-80 flex-col gap-2 p-5 bg-zinc-900 rounded-xl">
          <label className="text-md text-container" htmlFor="email">Email</label>
          <input className="p-2 outline-none border-b-2 border-container w-full text-zinc-700 bg-zinc-200" type="email" required />
          <label className="text-md text-container" htmlFor="password">Password</label>
          <div className="w-full flex items-center bg-zinc-200 border-b-2  border-container">
            <input className="p-2 outline-none  w-full text-zinc-700" type={passview} required />
            <FaEye onClick={passViewer} className="bg-white cursor-pointer text-zinc-800 w-10 h-10 px-2" />
          </div>
          <p className="text-sm text-container">forgot password ?</p>
          <button className="bg-container pointer-curser py-2 px-4 rounded-lg w-full">Submit</button>
        </form>
        <div className="flex items-center flex-col">
          <span className="text-zinc-700 text-sm">or Login with</span>
          <div className="flex mt-4 cursor-pointer drop-shadow-lg items-center gap-4 py-2 px-4 rounded-lg bg-zinc-100 text-container ">
            <FaGoogle className="w-8 h-8" />
            <span>Login With Google</span>
          </div>
          <p className="text-sm mt-4 text-zinc-700">Dont have account ? <Link href='/signup' className="text-sm underline text-primary">Signup</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
