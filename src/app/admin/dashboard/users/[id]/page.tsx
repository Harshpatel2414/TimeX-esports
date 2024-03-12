import React from 'react'

const UserDetails = ({params}:{ params: { id: string }}) => {
  return (
    <div>
      user {params.id}
    </div>
  )
}

export default UserDetails
