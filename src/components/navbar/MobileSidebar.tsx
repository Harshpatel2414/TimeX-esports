'use client'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import SidebarNavlink from './SidebarNavlink'
import { FaRightFromBracket } from 'react-icons/fa6'
import Image from 'next/image'

const MobileSidebar = (props: any) => {
    let { currentUser, logOut } = useAuth()
    return (
        <div className='border-r-2 border-container z-20 fixed bg-zinc-900 gap-4 flex top-0 left-0 h-full w-[300px] flex-col md:hidden p-5 '>
            <div className='flex items-center justify-between w-full border-b-2 border-zinc-700 pb-2'>
                <Image width={80} height={40} quality={100} className='w-20 curser-pointer' src="/images/logo.png" alt="Time-X" />
                <span className='font-bold cursor-pointer md:hidden text-xl text-on-primary ' onClick={() => props.setMenu(false)}>X</span>
            </div>
            <SidebarNavlink setMenu={props.setMenu} />
            <div className='pt-3 flex items-center justify-between border-t-2 border-zinc-700'>
                <div className='flex items-center gap-2 w-full'>
                    <Image height={40} width={40} quality={100} className='w-10 h-10 object-cover object-center rounded-full overflow-hidden border-2 border-container' src={currentUser?.photoURL || '/images/user.jpeg'} alt=''/>
                    <p className='capitalize'>{currentUser?.displayName || 'user'}</p>
                </div>
                {currentUser ? <div onClick={logOut} className='flex items-center gap-2 cursor-pointer w-fit'><span>logout</span><FaRightFromBracket className='w-6 h-6' />
                </div> : <Link href={'/login'} onClick={() => props.setMenu(false)} className="text-container">Login</Link>}
            </div>
        </div>
    )
}

export default MobileSidebar
