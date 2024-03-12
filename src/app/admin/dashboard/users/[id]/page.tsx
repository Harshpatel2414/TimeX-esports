<<<<<<< HEAD
import React from 'react'

const UserDetails = ({params}:{ params: { id: string }}) => {
=======
const UserDetails = ({ params }: any) => {
>>>>>>> 3ade6b3befa324d2f7472b5cd207b243324cadce
  return (
    <div>
      user {params.id}
    </div>
  )
}

export default UserDetails
