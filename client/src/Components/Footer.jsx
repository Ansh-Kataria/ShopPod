import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='mt-32 mb-16 mx-32 flex justify-between '>
            <div className='w-1/5 flex flex-col gap-4'>
                <p className='font-semibold text-base'>About</p>
                <p className='font-normal text-base'>Follow us on social media for exclusive promotions and deals.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-semibold text-base'>Latest Website</p>
                <a className='font-normal text-base' href="">Promotions</a>
                <a className='font-normal text-base' href="">Discount</a>
                <a className='font-normal text-base' href="">Trend</a>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-semibold text-base'>Information</p>
                <a className='font-normal text-base' href="">Mailing List</a>
                <a className='font-normal text-base' href="">Advertise</a>
                <a className='font-normal text-base' href="">Privacy</a>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-semibold text-base'>Social</p>
                <div className='flex gap-10'>
                    <FontAwesomeIcon className='size-5' icon={faFacebook} />
                    <FontAwesomeIcon className='size-5' icon={faTwitter} />
                    <FontAwesomeIcon className='size-5' icon={faLinkedinIn} />

                </div>
            </div>
        </div>
    )
}

export default Footer