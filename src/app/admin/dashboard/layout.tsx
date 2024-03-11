import React, { Suspense } from 'react'
import { Sidebar } from '../../../components/dashboard/sidebar/Sidebar'
import Navbar from '@/components/dashboard/Navbar'
import Loading from '@/components/Loading'

const Layout = ({ children }) => {
    return (
        <div className='flex w-full h-screen bg-indigo-950 overflow-hidden'>
            <Sidebar />
            <div className='w-full overflow-y-scroll scroll-smooth bg-indigo-400'>
                <Navbar />
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </div>
        </div>
    )
}

export default Layout
