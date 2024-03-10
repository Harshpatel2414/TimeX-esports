"use client"
import SectionHead from '@/components/SectionHead'
import TeamCard from '@/components/TeamCard'
import { useAuth } from '@/context/AuthContext'
import { matchInfoCards, teams } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'
import { FaUsers } from 'react-icons/fa'

const MatchDetails = ({ params }: any) => {
  let { currentUser } = useAuth()
  if (!currentUser) {
    toast.error('Login for registration');
    redirect('/login');
  }
  let id = params.matchId
  return (
    <div className='px-5 flex items-center flex-col gap-10 py-20'>
      <SectionHead title={`Match ${id} - Details`} />
      <div className='flex w-full flex-col md:flex-row md:h-[350px] lg:w-3/4 rounded-2xl overflow-hidden bg-zinc-900 text-zinc-200'>
        <div className='flex-2 w-full lg:max-w-[600px] '>
          <Image width={600} height={300} quality={100} className='h-full w-full object-center object-cover overflow-hidden ' src="/images/bg2.jpg" alt="" />
        </div>
        <div className='flex flex-1 flex-col items-center md:items-start gap-4 w-full md:w-fit p-5 uppercase justify-center' >
          <h1 className='text-3xl text-container tracking-wider'>Erangle Squad</h1>
          <p className='text-lg text-zinc-600'>Match ending in</p>
          <div className='flex gap-5 capitalize w-full items-center justify-between'>
            <div className='flex flex-col gap-2 items-center'>
              <p className='p-5 rounded-full bg-container text-lg md:text-2xl font-semibold'>30</p>
              <span>Days</span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <p className='p-5 rounded-full bg-container text-lg md:text-2xl font-semibold'>30</p>
              <span>Hours</span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <p className='p-5 rounded-full bg-container text-lg md:text-2xl font-semibold'>30</p>
              <span>Minutes</span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <p className='p-5 rounded-full bg-container text-lg md:text-2xl font-semibold'>30</p>
              <span>Seconds</span>
            </div>
          </div>
          <div className='flex items-center gap-10 text-sm text-zinc-600 uppercase mt-4'>
            <p>Mar 01, 5:00 PM</p>
            <div className='flex items-center gap-2'><FaUsers className='w-5 h-5' /><span>20/25 Teams</span></div>
          </div>
          <Link href='/register' className='btn-primary w-full'>Register</Link>
        </div>
      </div>
      <div className='flex flex-wrap gap-20 p-10 w-full lg:w-3/4 bg-zinc-900 rounded-lg'>
        {matchInfoCards && matchInfoCards.map((card) => {
          let { id, title, subtitle, icon } = card;
          return (
            <div key={id} className='text-left'>
              {icon}
              <h1 className=' card-heading '>{title}</h1>
              <p className='card-subheading'>{subtitle}</p>
            </div>
          )
        })}
      </div>
      <div className='flex flex-col items-center gap-10 w-full'>
        <h1 className='heading'>Teams</h1>
        {/* teams container */}
        <div className='flex flex-wrap items-center justify-center text-center gap-10 w-full lg:w-4/5'>
          {/* team card */}
          {teams && teams.map((team) => <TeamCard key={team.id} {...team} />)}
          {!teams && <h1 className='card-heading'>No Team register yet !</h1>}
        </div>
        <button className='btn-primary'>View more</button>
      </div>
    </div >
  )
}

export default MatchDetails
