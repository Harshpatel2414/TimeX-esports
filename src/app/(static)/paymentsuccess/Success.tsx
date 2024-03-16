"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'


const Success = () => {
    const searchParams = useSearchParams()
    const paymentid = searchParams.get('paymentid')


    return (
        <div className="flex flex-col items-center justify-center my-20 px-5">
            <div className="bg-green-100 border h-96 w-full border-green-400 md:w-1/2 text-green-700 py-3 rounded-lg flex items-center flex-col relative text-center px-6" role="alert">
                <Image height={300} width={300} className='-mt-20' src={'/images/success.png'} alt='' />
                <strong className="font-bold">Payment successful!</strong>
                <span className="block sm:inline">Your Payment ID = {paymentid}</span>
                <p className="text-gray-600 text-sm mt-2">Thank you for registering for Timex Esports match. You&apos;re all set to compete!</p>
                <div className="mt-10">
                    <Link href="/" className="px-4 py-2 border border-emerald-600 rounded-md hover:font-bold">Go back to homepage</Link>
                </div>
            </div>

        </div>
    )
}

export default Success