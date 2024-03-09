"use client"
import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEye, FaGoogle } from 'react-icons/fa'

const Signup = () => {
  const { signUpWithEmail } = useAuth()
  const [passview, setPassview] = useState('password')
  const previewImage = (event) => {
    const input = event.target;
    const image = document.getElementById('preview');
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e) => {
        image.src = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  let passViewer = () => {
    if (passview == 'text') {
      setPassview('password')
    } else {
      setPassview('text')
    }
  }

  return (
    <div className="flex px-5 gap-0 flex-col lg:flex-row-reverse items-center lg:justify-around w-full py-20">
      <div className=" lg:w-1/3 drop-shadow-xl z-10">
        <h1 className="text-3xl lg:text-4xl drop-shadow-xl shadow-container font-bold tracking-wider">Lets get started</h1>
        <p className="texte-sm text-zinc-700">Sign up to get more information about tournaments</p>
        <Image width={384} height={384} quality={100} className="-mb-14 md:my-0 w-96 relative drop-shadow-xl shadow-black" src="/images/login.png" alt="" />
      </div>
      <div className='flex flex-col'>
        <div className="flex flex-col gap-4  p-5 bg-zinc-900 rounded-lg items-center">
          <span className=" font-bold text-xl mb-2">Register</span>
          <form onSubmit={signUpWithEmail} className='flex flex-col gap-3 w-80 items-center'>
            <label htmlFor="file">
              <Image width={64} height={64} className='w-16 h-16 rounded-full border-2 border-container object-cover object-center' src="" id="preview" alt="" accept="image/*" />
              <span className='text-container'>Profile+</span>
            </label>
            <input className='hidden' type='file' name='img' id="file" onChange={(e) => previewImage(e)} />
            <input className='p-2 w-full outline-none text-zinc-800 border-b-2 border-container' type="text" name='username' placeholder='username' required />
            <input className='p-2 w-full outline-none text-zinc-800 border-b-2 border-container' type="email" name='email' placeholder='email' required />
            <div className='flex items-center gap-2 bg-white w-full border-b-2 border-container'>
              <input className='p-2 w-full outline-none text-zinc-800 ' type={passview} name='password' placeholder='password' required />
              <FaEye onClick={passViewer} className='w-6 h-full text-zinc-700 mr-2' />
            </div>
            <button className='btn-secondary w-full'>Sign up</button>
          </form>
        </div>
        <div className="text-center flex flex-col items-center gap-2 mt-4">
          <span>or</span>
          <button className="btn-primary flex items-center gap-2 w-80 justify-center"><FaGoogle />Sign up with google</button>
          <p >You already have account? <Link className='text-container underline' href='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
