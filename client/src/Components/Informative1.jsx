import React from 'react'
import informative1 from "../assets/Informative1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Informative1 = () => {
    return (
        <div className='mt-32 flex items-center justify-evenly '>

            <div className=' w-1/3'>
                <img src={informative1} alt="informative1" className='object-contain' />
            </div>
            <div className='w-1/3'>
                <p className=' text-[#1f2027] font-semibold text-2xl'>
                    Find your perfect fit with our wide range of sizes
                </p>
                <p className='font-medium text-xl mt-7'>
                    Free shipping on orders over $50.
                </p>
                <p className='text-[#1f2027] font-normal text-base mt-3 mb-12 '>
                    Lorem ipsum dolor sit amet consectetur. Massa quis natoque sit quam.
                    Eros non pellentesque elit tortor id euismod habitant cras neque. Sed
                    suspendisse id in ultrices adipiscing id adipiscing.
                </p>
                <button className='bg-[#1f2027] flex items-center text-white py-4 px-12 gap-2'>
                    <p className='text-base font-normal'>Explore More</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default Informative1