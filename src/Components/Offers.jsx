import React from 'react'
import Offer1 from '../assets/Offer1.png'
import Offer2 from '../assets/Offer2.png'
import Offer3 from '../assets/Offer3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'

const Offers = () => {
    return (
        <div className='mt-24 mx-32 flex flex-col items-center gap-12 '>
            <p className='font-medium text-lg text-[#1f2027]'>Special Offers</p>
            <div className='flex gap-9'>

                <div className='border-t-0 border bg-white rounded-3xl shadow-lg'>
                    <div className='rounded-3xl'>
                        <img src={Offer1} alt="offer1" className='object-fill' />
                    </div>
                    <div className='flex mx-6 my-4 justify-between items-center'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold text-2xl' >Free Shipping</p>
                            <p className='font-normal text-sm text-[#1f2027]'>Cambridge, Massachusetts, UK</p>
                        </div>
                        <div className='bg-[#F2F2F2] rounded-full py-3 px-4 '>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>

                </div>

                <div className='border-t-0 border bg-white rounded-3xl shadow-lg'>
                    <div className='rounded-3xl'>
                        <img src={Offer2} alt="offer2" className='object-fill' />
                    </div>
                    <div className='flex mx-6 my-4 justify-between items-center'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold text-2xl' >Discount %20</p>
                            <p className='font-normal text-sm text-[#1f2027]'>Cambridge, Massachusetts, UK</p>
                        </div>
                        <div className='bg-[#F2F2F2] rounded-full py-3 px-4 '>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>

                </div>

                <div className='border border-t-0 bg-white rounded-3xl shadow-lg'>
                    <div className='rounded-t-3xl'>
                        <img src={Offer3} alt="offer3" className='object-fill' />
                    </div>
                    <div className='flex mx-6 my-4 justify-between items-center'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold text-2xl' >Buy one, get one</p>
                            <p className='font-normal text-sm text-[#1f2027]'>Cambridge, Massachusetts, UK</p>
                        </div>
                        <div className='bg-[#F2F2F2] rounded-full py-3 px-4 '>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>

                </div>

            </div>

            <button className='bg-[#1f2027] flex items-center text-white py-4 px-12 gap-2'>
                <p className='text-base font-normal'>Explore More</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}

export default Offers