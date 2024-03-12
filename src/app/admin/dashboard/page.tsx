"use client"
import { useAuth } from '@/context/AuthContext';
import { redirect } from 'next/navigation';
import { cards } from '@/data';
import Card from '@/components/dashboard/card/Card';
import { useEffect } from 'react';

const Dashboard = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    if (!currentUser) {
      redirect('/');
    }
  })

  return (
    <div className='flex flex-col items-center md:flex-row w-full h-dvh'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 w-full gap-5 p-5'>
        {cards.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
