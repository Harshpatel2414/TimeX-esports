import React from 'react'
import { DownOutlined } from '@ant-design/icons';
const User = () => {
  return (
    <div className='flex gap-4 items-center'>
      <span>Username</span>
      <div>
        <img className='w-10 h-10 border-2 object-cover overflow-hidden object-center border-primary rounded-full' src="/images/char1.png" alt="" />
      </div>
      <DownOutlined/>
    </div>
  )
}

export default User
