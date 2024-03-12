import Image from 'next/image'
import { DashboardUserCardProps } from '../../../new-types';

const UserCard: React.FC<DashboardUserCardProps> = ({ name, email }) => {
    return (
        <div className='flex items-center p-3 gap-4 w-full md:w-[300px] bg-indigo-500 text-lg font-medium rounded-md'>
            <Image width={48} height={48} className='w-12 h-12 rounded-md border-2 border-indigo-200 object-cover object-center' src={'/images/user.jpeg'} alt='img' />
            <div className='flex flex-col text-sm w-full'>
                <span className='uppercase'>{name}</span>
                <span className='text-zinc-400'>{email}</span>
            </div>
            <button className='py-1 px-2 text-sm bg-indigo-700 rounded-md'>View</button>
        </div>
    )
}

export default UserCard;
