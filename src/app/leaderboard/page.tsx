import React from 'react';

const Leaderboard = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 px-5 py-20">
            <h1 className="heading">Overall Leaderboard</h1>
            <table className='w-full lg:w-4/5 table-auto text-left border-separate text-sm md:text-lg'>
                <thead>
                    <tr className='bg-container even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <th className='p-2'>#</th>
                        <th className='p-2'>Teams</th>
                        <th className='p-2'>Match</th>
                        <th className='p-2'>Win</th>
                        <th className='p-2'>Point</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className=' odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <td className='p-2'>1</td>
                        <td className='flex items-center gap-4 p-2'>
                            <img src="/images/char1.png" alt="" className='w-10 h-10 rounded-full overflow-hidden object-cover object-center border-2 border-container' />
                            <span>Shield Gaming</span>
                        </td>
                        <td className='p-2'>10</td>
                        <td className='p-2'>5</td>
                        <td className='p-2'>100</td>
                    </tr>
                    <tr className=' odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <td className='p-2'>2</td>
                        <td className='flex items-center gap-4 p-2'>
                            <img src="/images/char1.png" alt="" className='w-10 h-10 rounded-full overflow-hidden object-cover object-center border-2 border-container' />
                            <span>Shield Gaming</span>
                        </td>
                        <td className='p-2'>10</td>
                        <td className='p-2'>5</td>
                        <td className='p-2'>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
