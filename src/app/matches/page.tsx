import React from 'react'
import MatchList from './MatchList'

const page = () => {
  return (
    <div className='flex items-center flex-col py-20 gap-10'>
      <h1 className='text-2xl'>Tournaments</h1>
      <div className='text-center'>
        <p className='text-md text-container'>Our Matches</p>
        <h1 className='text-3xl uppercase font-bold'>paly to earn money</h1>
      </div>
      <MatchList/>
    </div>
  )
}

export default page
