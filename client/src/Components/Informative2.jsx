import React from 'react'
import informative from "../assets/Informative2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Informative2 = () => {
    return (
        <div className='mt-32 flex items-center justify-evenly '>
            <div className='w-1/3'>
                <p className=' text-[#1f2027] font-semibold text-2xl'>
                    Get a free gift with purchase of $75 or more.
                </p>
                <p className='font-medium text-xl mt-7'>
                    Don't miss out on our flash sale
                </p>
                <p className='text-[#1f2027] font-normal text-base mt-3 mb-12 '>
                    Lorem ipsum dolor sit amet consectetur. Massa quis natoque sit quam.
                    suspendisse id in ultrices adipiscing id adipiscing.
                </p>
                <button className='bg-[#1f2027] flex items-center text-white py-4 px-12 gap-2'>
                    <p className='text-base font-normal'>Explore More</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            <div className=' w-1/3 '>
                <img src={informative} alt="informative1" className='object-contain' />
            </div>
        </div>
    )
}

export default Informative2