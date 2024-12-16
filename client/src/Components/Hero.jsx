import React from 'react'
import hero from '../assets/Hero.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return (
        <div className='mt-32 mx-32 flex items-start justify-between'>

            <div className=' w-2/5'>
                <img src={hero} alt="Hero" className='object-contain' />
            </div>
            <div className='w-1/2'>
                <p className='font-semibold text-6xl'>
                    Experience the best in fashion at ShopPod!
                </p>
                <p className='font-normal text-base my-12 '>
                    Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae
                </p>
                <button className='bg-[#1f2027] flex items-center text-white py-4 px-12 gap-2'>
                    <p className='text-base font-normal'>Buy Now</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default Hero