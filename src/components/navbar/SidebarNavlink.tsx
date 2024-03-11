'use client'
import React from 'react'
import { navlinksMob } from '../../data'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

const Navlinks: React.FC<{ setMenu: (value: boolean) => void }> = ({ setMenu }) => {
    let {currentUser} = useAuth()
    return (
        <nav className='h-full md:h-fit'>
            <ul className="navBtn flex flex-col md:flex-row justify-evenly gap-5">
                {navlinksMob.map((link) => {
                    let { text, href, id } = link;
                    return (<li key={id} className='hover:text-container'>
                        <Link onClick={() => setMenu(false)} href={href}>{text}</Link>
                    </li>
                    )
                })}
                {currentUser && <li><Link onClick={() => setMenu(false)} href={'/user'}>Profile</Link></li>}
            </ul>
        </nav>
    )
}

export default Navlinks
