'use client'
import { FaUser } from 'react-icons/fa'
import Navlinks from './Navlinks'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { FaRightFromBracket } from 'react-icons/fa6'

const MobileSidebar = (props: any) => {
    let { currentUser, setCurrentUser } = useAuth()
    return (
        <div className='border-r-2 border-container z-20 fixed bg-zinc-900 gap-4 flex top-0 left-0 h-full w-[300px] flex-col md:hidden p-5 '>
            <div className='flex items-center justify-between w-full border-b-2 border-zinc-700 pb-2'>
                <img className='w-20 curser-pointer' src="/images/logo.png" alt="Time-X" />
                <span className='font-bold cursor-pointer md:hidden text-xl text-on-primary ' onClick={() => props.setMenu(false)}>X</span>
            </div>
            <Navlinks setMenu={props.setMenu} />
            <div className='pt-3 flex items-center justify-between gap-5 border-t-2 border-zinc-700'>
                <div className='flex items-center gap-2'>
                    <div className=' flex rounded-full h-10 w-10 border-2 border-container items-center justify-center' >
                        {/* user image its demo logo*/}
                        <FaUser />
                    </div>
                    <p>User</p>
                </div>
                {currentUser ? <div onClick={() => setCurrentUser(false)} className='flex items-center gap-2 cursor-pointer'><span>logout</span><FaRightFromBracket className='w-6 h-6' />
                </div> : <Link href={'/login'} onClick={() => props.setMenu(false)} className="text-container">Login</Link>}
            </div>
        </div>
    )
}

export default MobileSidebar
