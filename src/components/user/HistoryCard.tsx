import Image from 'next/image'
import React from 'react'

const HistoryCard = ({ id, imageUrl, match, matchtype, winamount, lossamount, date, result }: historyCardProps) => {
    return (
        <div className='w-full bg-zinc-900 rounded-lg flex items-center relative overflow-hidden p-2 gap-4'>
            <div>
                <Image quality={100} width={80} height={80} className='w-20 h-20 rounded-lg bg-white object-cover object-center' src={imageUrl} alt="" />
            </div>
            <div className='h-full w-full flex flex-col justify-between'>
                <div className='flex item-center justify-between w-full'>
                    <div>
                        <h1 className='text-md font-semibold text-zinc-400'>{match}</h1>
                        <p className='text-sm text-zinc-600'>{matchtype}</p>
                    </div>
                    <p className='text-sm text-container'>{winamount ? winamount : lossamount}</p>
                </div>
                <p className='text-sm text-zinc-600'>Date - {date} </p>
            </div>
            <span className=' px-2 py-1 rounded-tl-lg bg-container  absolute right-0 bottom-0'>{result}</span>
        </div>
    )
}

export default HistoryCard
