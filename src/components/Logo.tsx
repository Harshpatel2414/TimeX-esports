import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div className=" flex gap-4 items-center text-xl font-bold">
            <Link href='/'>
                <img className='h-10' src="/images/logo.png" alt="TIM3-X" />
            </Link>
        </div>
    )
}

export default Logo
