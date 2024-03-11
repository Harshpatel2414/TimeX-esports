import React from 'react'

const Contact = () => {
    return (
        <div className='flex justify-center items-center w-full flex-col py-20 gap-10 px-5'>
            <div>
                <h1 className='text-2xl lg:text-5xl text-center font-bold tracking-widest'>Contact Us</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-10  lg:w-3/4 items-center'>
                <div className='flex-1 flex flex-col gap-5'>
                    <div>
                        <h1 className=' opacity-10 text-6xl font-black tracking-widest'>Join Us</h1>
                        <h1 className='text-3xl font-bold mb-3'>CONTACT US AND SOLVE YOUR PROBLEM</h1>
                        <p className='text-sm text-zinc-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum iusto sapiente ut vel reprehenderit, atque adipisci. Laudantium animi ut suscipit.</p>
                    </div>
                    <div>
                        <h1 className='text-lg'>Information</h1>
                        <p className='text-sm text-zinc-600'>+91 7350703785</p>
                        <p className='text-sm text-zinc-600'>harshalpateljnv@gmail.com</p>
                        <p className='text-sm text-zinc-600'>At Post Nandurbar, Maharashtra 425412</p>
                    </div>
                </div>
                <form className='flex-1 flex gap-5 flex-col w-full'>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <input className='p-3 w-full outline-none' type="text" name='name' id='name' placeholder='Name' />
                        <input className='p-3 w-full outline-none' type="email" name='email' id='email' placeholder='Email' />
                    </div>
                    <textarea name="msg" className='p-2 outline-none resize-none text-gray-600' rows={5} placeholder='Message' />
                    <button type='submit' className='px-4 py-2 bg-container'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
