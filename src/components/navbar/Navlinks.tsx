'use client'
import React from 'react'
import { navlinks } from '../../data'
import Link from 'next/link'

const Navlinks: React.FC<{ setMenu: (value: boolean) => void }> = ({ setMenu }) => {
    return (
        <nav className='h-full md:h-fit'>
            <ul className="navBtn flex flex-col md:flex-row justify-evenly gap-5">
                {navlinks.map((link) => {
                    let { text, href, id } = link;
                    return (<li key={id} className='hover:text-container'>
                        <Link onClick={() => setMenu(false)} href={href}>{text}</Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navlinks
