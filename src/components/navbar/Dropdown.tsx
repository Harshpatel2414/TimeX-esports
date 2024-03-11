import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { FaDiceD6, FaEnvelope, FaUser } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'

const Dropdown = ({ displayName, email }) => {
    let { logOut } = useAuth();

    return (
        <div className='hidden md:flex flex-col gap-3 absolute top-16 right-0 bg-zinc-900 rounded-lg p-4 z-10 text-sm w-48'>
            <div className='flex flex-col gap-2 border-b-2 pb-2 border-zinc-600'>
                <span className=' capitalize'>hii, {displayName}</span>
                <span className='flex gap-4 items-center'><FaEnvelope />{email}</span>
                <Link href={'/user'} className='underline flex items-center gap-4'><FaUser />Profile</Link>
                {email === process.env.User_Email && <Link href={'/admin/dashboard'} className='underline flex items-center gap-4'><FaDiceD6 />Dashboard</Link>}
                <span className='flex gap-4 items-center'><FaGear />Settings</span>
            </div>
            <button onClick={logOut} className='btn-primary'>Logout</button>
        </div>
    )
}

export default Dropdown
