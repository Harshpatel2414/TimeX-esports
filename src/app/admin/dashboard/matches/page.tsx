"use client"
import MatchCard from '@/components/dashboard/MatchCard'
import AddMatchForm from '@/components/dashboard/AddMatchForm'
import React, { useState } from 'react'

const Matches = () => {
  const [matchDetail, setmatchDetail] = useState([{ name: '', email: '' }]);
  return (
    <div className='p-2 flex flex-col gap-4'>
      <h1>Create match</h1>
      <AddMatchForm />
      <h1>Active Matches</h1>
      <div className=' flex items-center justify-center gap-5 flex-wrap text-center w-full'>
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </div>
    </div>
  )
}

export default Matches
