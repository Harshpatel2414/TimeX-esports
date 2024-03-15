import React from 'react'
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Link from 'next/link';

const infoNestItems: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Registration Information',
        children: <p>When you register to participate in tournaments and matches, we may collect personal information such as your name, email address, date of birth, and BGMI username.</p>,
    },
    {
        key: '2',
        label: 'Gameplay Information',
        children: <p>We may collect gameplay data, including your in-game statistics, match results, and performance during tournaments and matches.</p>,
    },
    {
        key: '3',
        label: 'Payment Information',
        children: <p> If you participate in paid tournaments or matches, we may collect payment information such as your credit card details or other payment methods.</p>,
    },
];
const shareInfoNestItems: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Third-Party Service Providers',
        children: <p>We may engage third-party service providers to assist us in operating our BGMI tournament and match services, processing payments, and analyzing gameplay data.</p>,
    },
    {
        key: '2',
        label: 'Sponsors and Partners',
        children: <p>We may share certain information with sponsors or partners associated with our tournaments and matches for promotional and marketing purposes, with your consent.</p>,
    },
    {
        key: '3',
        label: 'Legal Compliance',
        children: <p>We may disclose your information as required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.</p>,
    },
];

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: <h1 className="text-zinc-900 font-semibold">Information We Collect</h1>,
        children: <div>
            <p>We may collect the following types of information when you use our website and participate in BGMI tournaments and matches:</p>
            <Collapse defaultActiveKey="1" items={infoNestItems} />
        </div>,
    },
    {
        key: '2',
        label: <h1 className="text-zinc-900 font-semibold"> Use of Information</h1>,
        children: <div>
            <p className='pl-5'>We may use the information we collect for the following purposes:</p>
            <ul className='list-disc pl-12'>
                <li>To provide, operate, and improve our BGMI tournament and match services;</li>
                <li>To communicate with you regarding your participation in tournaments and matches, including match schedules, results, and prize distribution;</li>
                <li>To process payments for paid tournaments and matches and facilitate earnings distribution to winners;</li>
                <li>To analyze gameplay data and improve the gaming experience for our users;</li>
                <li>To comply with legal obligations and enforce our terms and conditions.</li>
            </ul>
        </div>,
    },
    {
        key: '3',
        label: <h1 className="text-zinc-900 font-semibold">Sharing of Informationt</h1>,
        children: <div>
            <p>We may share your information with the following parties:</p>
            <Collapse defaultActiveKey="1" items={shareInfoNestItems} />
        </div>,
    },
{
    key: '4',
        label: <h1 className="text-zinc-900 font-semibold">Data Security</h1>,
            children: <p>We take reasonable measures to protect the security of your personal information and gameplay data. However, please be aware that no method of transmission over the internet or electronic storage is completely secure.</p>,
    },
{
    key: '5',
        label: <h1 className="text-zinc-900 font-semibold">Children&apos;s Privacy</h1>,
            children: <p>Our BGMI tournament and match services are not intended for individuals under the age of 13. We do not knowingly collect personal information from individuals under the age of 13. If you believe that we have inadvertently collected personal information from a child under 13, please contact us to request deletion.</p>,
    },
{
    key: '6',
        label: <h1 className="text-zinc-900 font-semibold">Changes to this Privacy Policy</h1>,
            children: <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy on our website.</p>,
    },
{
    key: '7',
        label: <h1 className="text-zinc-900 font-semibold">Contact Us</h1>,
            children: <p>If you have any questions or concerns about these Terms, please contact us at <Link className='underline text-container' href={'/contact'}>Contact Us</Link>.</p>,
    },
];
const PrivacyPolicy = () => {
    return (
        <div className='bg-zinc-900 px-5 flex py-10 gap-10 flex-col items-center'>
            <div className='md:w-4/5'>
                <h1 className='text-xl md:text-3xl mb-3 font-semibold tracking text-container'>Timex Esport: Privacy Policy</h1>
                <p className='text-zinc-500 text-sm mb-2'>Last Updated : March 15, 2024</p>
                <p className='text-zinc-400 text-sm'>This Privacy Policy describes how Timex Esports (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares your personal information when you use our website and participate in BGMI tournaments and matches, as well as earning opportunities associated with winning matches.</p>
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

export default PrivacyPolicy
