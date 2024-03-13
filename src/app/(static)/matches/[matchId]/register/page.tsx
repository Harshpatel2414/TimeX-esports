import TeamRegistrationForm from '@/components/razorpay/RegistrationForm'
import React from 'react'

const RegistrationPage = () => {
    return (
        <div className='p-5'>
            <h1 className='card-heading my-5'>Fill the given form </h1>
            <TeamRegistrationForm />
        </div>
    )
}

export default RegistrationPage
