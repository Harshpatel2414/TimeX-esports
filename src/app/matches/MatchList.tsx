import React from 'react'
import MatchCard from '@/components/MatchCard'

const MatchList = () => {
  return (
    <div className='flex flex-wrap items-center justify-center text-center p-5 gap-10'>
      <MatchCard />
      <MatchCard />
      <MatchCard />
    </div>
  )
}

export default MatchList
