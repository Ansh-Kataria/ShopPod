import React from 'react'
import Product1 from "../assets/Product1.png"
import Product2 from "../assets/Product2.png"
import Product3 from "../assets/Product3.png"
import Product4 from "../assets/Product4.png"
import Product5 from "../assets/Product5.png"
import Product6 from "../assets/Product6.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Products = () => {
    return (
        <div className='mt-32 mx-32 flex flex-col items-center justify-center'>
            <p className='font-medium text-xl mb-12'>See All Products</p>
            <div className='grid grid-cols-3 gap-32'>
                <div className='relative shadow-lg'>
                    <img className='object-cover' src={Product1} alt="Product" />
                    <div className='absolute bottom-0 left-0 right-0 bg-white text-[#1f2027] pl-6 py-5 border'>
                        <p className='font-semibold text-base'>Over The Cloud Sock</p>
                        <p className='font-normal text-base'>16.00 USD</p>
                    </div>
                </div>
                <div className='relative shadow-lg'>
                    <img className='object-cover' src={Product2} alt="Product" />
                    <div className='absolute bottom-0 left-0 right-0 bg-white text-[#1f2027] pl-6 py-5 border'>
                        <p className='font-semibold text-base'>Over The Cloud Sock</p>
                        <p className='font-normal text-base'>16.00 USD</p>
                    </div>
                </div>
                <div className='relative shadow-lg'>
                    <img className='object-cover' src={Product3} alt="Product" />
                    <div className='absolute bottom-0 left-0 right-0 bg-white text-[#1f2027] pl-6 py-5 border'>
                        <p className='font-semibold text-base'>Over The Cloud Sock</p>
                        <p className='font-normal text-base'>16.00 USD</p>
                    </div>
                </div>
                <div className='relative shadow-lg'>
                    <img className='object-cover' src={Product4} alt="Product" />
                    <div className='absolute bottom-0 left-0 right-0 bg-white text-[#1f2027] pl-6 py-5 border'>
                        <p className='font-semibold text-base'>Kids Stop Illegal Online</p>
                        <p className='font-normal text-base'>10.00 USD</p>
                    </div>
                </div>
                <div className='relative shadow-lg'>
                    <img className='object-cover' src={Product5} alt="Product" />
                    <div className='absolute bottom-0 left-0 right-0 bg-white text-[#1f2027] pl-6 py-5 border'>
                        <p className='font-semibold text-base'>Kids Panda - Panda</p>
                        <p className='font-normal text-base'>10.00 USD</p>
                    </div>
                </div>
                <div className='relative shadow-lg'>
                    <img className='object-cover' src={Product6} alt="Product" />
                    <div className='absolute bottom-0 left-0 right-0 bg-white text-[#1f2027] pl-6 py-5 border'>
                        <p className='font-semibold text-base'>Kids Mountain Gorillas Sock</p>
                        <p className='font-normal text-base'>10.00 USD</p>
                    </div>
                </div>
            </div>
            <button className='bg-[#1f2027] mt-12 flex items-center text-white py-4 px-12 gap-2'>
                <p className='text-base font-normal'>Explore More</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    )
}

export default Products