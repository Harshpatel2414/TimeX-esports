import { register } from 'module'
import Link from 'next/link'
import React from 'react'
import { FaCalendar, FaUser, FaUsers } from 'react-icons/fa'

const MatchCard = () => {
    return (
        <div className="p-4 flex flex-col gap-4 shadow-lg bg-zinc-900 rounded-lg md:w-[350px]">
            <div className='relative'>
                <span className='absolute bottom-2 left-2 py-2 px-4 text-container bg-zinc-950 rounded-full'>Live</span>
                <img className="w-full rounded-lg" src="/images/bg2.jpg" alt="Game Visual" />
            </div>
            <div className='flex flex-col gap-2 border-t-2 border-zinc-800 py-2'>
                <div className=" text-left">
                    <div className=" tracking-wider text-xl mb-1">BGMI - ERANGLE</div>
                    <p className="text-zinc-600 text-base">Squad Match</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Entry <span>40rs</span></p>
                    <div className='flex gap-2 items-center  text-sm'>
                        <FaCalendar /><span>Mar 01, 11:00 AM</span>
                    </div>
                </div>
            </div>
            <div className="pt-4 border-t-2 border-zinc-800 flex justify-between items-center">
                <p className='text-sm text-zinc-600'>12/25 Teams</p>
                <Link className=' cursor-pointer px-4 py-2 rounded-lg bg-container' href={'/matches/1'}>View</Link>
            </div>
        </div>
    )
}

export default MatchCard
