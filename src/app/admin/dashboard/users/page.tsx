import UserCard from '@/components/dashboard/UserCard'
import React from 'react'
import { DashboardUserCardProps } from '../../../../../new-types'

const Users = () => {

  const props: DashboardUserCardProps = {
    name: "vishal",
    email: "ljs@ljlj.com",
    matches: []
  }

  return (
    <div className='p-2'>
      <h1 className='card-heading mb-5 mt-2'>Registered Users</h1>
      <div>
        <UserCard {...props} />
      </div>
    </div>
  )
}

export default Users
