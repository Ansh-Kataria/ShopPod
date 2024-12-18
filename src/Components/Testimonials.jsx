import { faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import avatar from "../assets/avatar.png"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.png"

const Testimonials = () => {
    return (
        <div className='mt-32 mx-32 flex items-center' >
            <div className='w-1/2'>
                <p className='font-medium text-xl mb-5'>Stand out with our trendy merchandise.</p>
                <p className='font-semibold text-4xl'>Elevate your wardrobe with </p>
                <p className='font-normal text-3xl'>our exclusive collection.</p>
                <div className='mt-6 mb-14 font-normal text-base'>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit </li>
                    <li>tortor id euismod habitant</li>
                    <li>Sed suspendisse id in ultrices</li>

                </div>

                <button className='bg-[#1f2027] flex items-center text-white py-4 px-12 gap-2'>
                    <p className='text-base font-normal'>Explore More</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className='w-1/2 flex flex-col gap-12'>
                <div className='w-4/5 rounded-xl shadow-lg p-5 border'>
                    <div>
                        <FontAwesomeIcon className='size-8' icon={faQuoteLeft} />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-right font-roboto text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        <img className='size-16' src={avatar} alt="avatar" />
                    </div>
                    <div>
                        <p className='font-roboto font-bold text-lg'>Esther Howard</p>
                    </div>
                </div>
                <div className='ml-auto w-4/5 rounded-xl shadow-lg p-5 border'>
                    <div>
                        <FontAwesomeIcon className='size-8' icon={faQuoteLeft} />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-right font-roboto text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        <img className='size-16' src={avatar2} alt="avatar" />
                    </div>
                    <div>
                        <p className='font-roboto font-bold text-lg'>Esther Howard</p>
                    </div>
                </div>
                <div className='w-4/5 rounded-xl shadow-lg p-5 border'>
                    <div>
                        <FontAwesomeIcon className='size-8' icon={faQuoteLeft} />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-right font-roboto text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        <img className='size-16' src={avatar3} alt="avatar" />
                    </div>
                    <div>
                        <p className='font-roboto font-bold text-lg'>Esther Howard</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials