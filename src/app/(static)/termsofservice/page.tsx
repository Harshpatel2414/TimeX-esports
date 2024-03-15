import React from 'react'
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Link from 'next/link';

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: <h1 className="text-zinc-900 font-semibold">Introduction</h1>,
        children: <p>Timex Esport provides a platform for match registration and payment services tailored for esports events. These services are provided to you subject to these Terms, including any additional guidelines and future modifications. Timex Esport reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the platform after any such changes constitutes your acceptance of the new Terms.</p>,
    },
    {
        key: '2',
        label: <h1 className="text-zinc-900 font-semibold">Registration and Account Security</h1>,
        children: <p>To access certain features of Timex Esport, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Timex Esport reserves the right to suspend or terminate your account if any information provided during the registration process is inaccurate, false, or incomplete.</p>,
    },
    {
        key: '3',
        label: <h1 className="text-zinc-900 font-semibold">Match Registration and Payment</h1>,
        children: <p>Timex Esport allows users to register for esports matches and tournaments hosted on the platform. By registering for a match, you agree to abide by the rules and regulations set forth by the event organizers. Payment may be required for certain matches, and you agree to pay all fees associated with your use of Timex Esport in a timely manner. All payments are processed securely through our payment system.</p>,
    },
    {
        key: '4',
        label: <h1 className="text-zinc-900 font-semibold">User Conduct</h1>,
        children: <p>You agree to use Timex Esport for lawful purposes only and to comply with all applicable laws and regulations. You shall not engage in any conduct that violates the rights of others, including but not limited to infringement of intellectual property rights, defamation, harassment, or illegal activities. Timex Esport reserves the right to remove any content or suspend/terminate any account that violates these Terms or is otherwise objectionable.</p>,
    },
    {
        key: '5',
        label: <h1 className="text-zinc-900 font-semibold">Intellectual Property</h1>,
        children: <p>All content on Timex Esport, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of Timex Esport or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, modify, or distribute any content from Timex Esport without prior written consent from the respective rights holders.</p>,
    },
    {
        key: '6',
        label: <h1 className="text-zinc-900 font-semibold">Limitation of Liability</h1>,
        children: <p>In no event shall Timex Esport be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the platform, including but not limited to loss of profits, data, or goodwill. Timex Esport&apos;s total liability for any claim arising out of these Terms shall not exceed the amount paid by you, if any, to Timex Esport during the twelve-month period preceding the event giving rise to the claim.</p>,
    },
    {
        key: '7',
        label: <h1 className="text-zinc-900 font-semibold">Contact Us</h1>,
        children: <p>If you have any questions or concerns about these Terms, please contact us at <Link className='underline text-container' href={'/contact'}>Contact Us</Link>.</p>,
    },
];
const TermsOfService = () => {
    return (
        <div className='bg-zinc-900 px-5 flex py-10 gap-10 flex-col items-center'>
            <div className='md:w-4/5'>
                <h1 className='text-xl md:text-3xl mb-5 font-semibold tracking text-container'>Timex Esport: Terms of Service</h1>
                <p className='text-zinc-400 text-sm'>Welcome to Timex Esport! These Terms of Service &quot;Terms&quot; govern your use of our website and services, so please read them carefully. By accessing or using Timex Esport, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access Timex Esport.</p>
            </div>
            <Collapse
                className='w-full md:w-4/5 text-container bg-zinc-400'
                defaultActiveKey={['1']}
                items={items}
                bordered={false}
            />
            <p className='text-sm text-zinc-300 '>Thank you for using Timex Esport!</p>
        </div>
    )
}

export default TermsOfService
