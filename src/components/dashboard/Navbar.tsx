"use client"
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
    const {currentUser} = useAuth();
    return (
        <div className='py-2 px-5 flex items-center justify-between bg-indigo-900'>
            <div className=' capitalize'>{pathname.split("/").pop()}</div>
            <div className='flex items-center gap-4'>
                <span className='capitalize'>{currentUser?.displayName}</span>
                <Image height={48} width={48} quality={100} className='h-12 w-12 rounded-full border-2 object-center object-cover border-indigo-500' src={currentUser?.photoURL || '/images/user.jpeg'} alt=''/>
            </div>
        </div>
    )
}

export default Navbar
