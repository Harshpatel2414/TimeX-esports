import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-full w-full text-center'>
      <h1>We Cannot get your request</h1>
      <p>Go back to <span className='text-sm text-indigo-700'><Link href={'/dashboard'}>Dashboard</Link></span></p>
    </div>
  )
}

export default NotFound
