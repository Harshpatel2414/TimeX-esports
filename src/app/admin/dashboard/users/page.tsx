import UserCard from '@/components/dashboard/UserCard'
import React from 'react'

const Users = () => {
  return (
    <div className='p-2'>
      <h1 className='card-heading mb-5 mt-2'>Registered Users</h1>
      <div>
        <UserCard />
      </div>
    </div>
  )
}

export default Users
