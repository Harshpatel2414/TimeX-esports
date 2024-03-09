import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTelegramPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-zinc-950'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 p-5 gap-10 py-10 border-t-2 border-container'>
                <div className='flex flex-col justify-around gap-4'>
                    <div>
                        <Image width={96} height={40} quality={100} src="/images/logo.png" alt="" />
                    </div>
                    <p className='text-sm text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime Lorem ipsum dolor sit amet</p>
                    <span className='text-md'>Follow Us</span>
                    <div className='flex gap-4'>
                        <Link href='/'><FaInstagram className='w-8 h-8' /></Link>
                        <Link href='/'><FaWhatsapp className='w-8 h-8' /></Link>
                        <Link href='/'><FaTwitter className='w-8 h-8' /></Link>
                        <Link href='/'><FaTelegramPlane className='w-8 h-8' /></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-xl'>Quick Links</h1>
                    <ul className='flex flex-col gap-2 text-zinc-500 text-sm'>
                        <li>Tornaments</li>
                        <li>Matches</li>
                        <li>Teams</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-xl'>Explore</h1>
                    <ul className='flex flex-col gap-2 text-zinc-500 text-sm'>
                        <li>Top Player</li>
                        <li>Profile</li>
                        <li>Results</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-xl'>Social Links</h1>
                    <ul className='flex flex-col gap-2 text-zinc-500 text-sm'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Telegram</li>
                        <li>Whatsapp</li>
                    </ul>
                </div>
            </div>
            <div className='py-5 uppercase text-xs text-center border-t-2 border-container'>
                <p>Copyright &copy; 2024 - All Rights Reserved By</p>
                <span className='text-container'>Time-X ESports</span>
            </div>
        </div>
    )
}

export default Footer
