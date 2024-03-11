"use client"
import React, { useState } from 'react'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import Dropdown from './Dropdown';

const User = () => {

  const [show, setShow] = useState(false);
  let { currentUser } = useAuth()

  return (

    <div className='flex gap-4 items-center relative' onClick={() => setShow((prev) => !prev)}>
      <span className=' capitalize'>{currentUser.displayName}</span>
      <div className='w-10 h-10 border-2 object-cover overflow-hidden object-center border-primary rounded-full'>
        <Image width={40} height={40} quality={100} src={currentUser.photoURL || '/images/user.jpeg'} alt="profile" />
      </div>
      {show ? (
        <CaretUpOutlined />
      ) : (
        <CaretDownOutlined />
      )}
      {show && <Dropdown {...currentUser} />}
    </div>
  )
}

export default User
