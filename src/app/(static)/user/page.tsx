import { userHistory } from '@/data'
import HistoryCard from '@/components/user/HistoryCard'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

const UserProfile = () => {
  let { currentUser, logOut } = useAuth()

  if (!currentUser) {
    redirect('/')
  }
  
  return (
    <div className='h-screen flex flex-col items-center w-full px-5'>
      <div className='py-10 flex items-center justify-center flex-col gap-2'>
        <Image width={80} height={80} quality={100} className='w-20 h-20 border-2 border-container rounded-full object-cover object-center overflow-hidden' src={currentUser?.photoURL || "/images/pubg-character.png"} alt="" />
        <div className='w-full text-center'>
          <h1 className='card-heading'>{currentUser.displayName}</h1>
          <p className='card-subheading'>{currentUser.email}</p>
          <button onClick={logOut} className='px-5 py-2 bg-container rounded-md mt-3 text-sm'>Logout</button>
        </div>
      </div>
      <div className='w-full flex items-center flex-col gap-4'>
        <p className='sub-heading'>history</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 w-full gap-4'>
          {/* history container cards  */}
          {userHistory && userHistory.map((history) => <HistoryCard key={history.id} {...history} />)}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
