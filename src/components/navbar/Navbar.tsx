"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { FaBars, FaUser } from "react-icons/fa";
import MobileSidebar from './MobileSidebar';
import Navlinks from './Navlinks';
import Logo from '../Logo';
import { useAuth } from '@/context/AuthContext';
import User from './User';

const Navbar: React.FC = () => {
    const [menu, setMenu] = useState(false)
    const { currentUser } = useAuth()
    return (
        <nav className='flex items-center px-5 lg:px-20 h-20 justify-between bg-zinc-900 text-lg text-gray-300'>
            <Logo />
            {menu && <MobileSidebar setMenu={setMenu} />}
            <div className='hidden md:relative md:h-auto md:w-auto md:bg-transparent md:flex md:flex-row md:items-center'>
                <Navlinks setMenu={setMenu} />
            </div>
            <div className='flex items-center gap-4'>
                <div className='hidden md:flex gap-2 items-center' >
                    {currentUser ? <User /> : <div className=' flex items-center gap-2 justify-center ' >
                        <p>User</p>
                        <div className='rounded-full h-10 w-10 border-2 border-container flex items-center justify-center' >
                            <FaUser />
                        </div>
                    </div>}
                </div>
                <div className='flex gap-4 items-center'>
                    {!currentUser && <Link href='/login' className='px-4 py-2 ring-2 ring-container hover:ring-on-primary hover:text-on-primary rounded-xl ring-inset text-md text-white'>Get Started</Link>
                    }
                    <FaBars className='md:hidden w-8 h-8' onClick={() => setMenu(!menu)} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
