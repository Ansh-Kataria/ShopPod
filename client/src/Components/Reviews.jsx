import React from 'react'
import Review1 from "../assets/Review1.png"
import Review2 from "../assets/Review2.png"
import Review3 from "../assets/Review3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'; // Solid star


const Reviews = () => {
    return (
        <div className='mt-32 mx-32 grid grid-cols-3 gap-20'>
            <div className='flex flex-col items-center text-center gap-4'>
                <div>
                    <img className='size-28' src={Review1} alt="Review" />
                </div>
                <div>
                    <FontAwesomeIcon className='size-8' icon={faQuoteRight} />
                </div>
                <div>
                    <p className='font-normal text-base'>It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.</p>
                    <p className='font-normal text-base'>Hanna Baptista</p>
                </div>
                <div className='flex gap-3'>
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#ababab' size='2x' icon={faStar} />


                </div>
            </div>
            <div className='flex flex-col items-center text-center gap-4'>
                <div>
                    <img className='size-28' src={Review2} alt="Review" />
                </div>
                <div>
                    <FontAwesomeIcon className='size-8' icon={faQuoteRight} />
                </div>
                <div>
                    <p className='font-normal text-base'>It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.</p>
                    <p className='font-normal text-base'>Cheyenne Carder</p>
                </div>
                <div className='flex gap-3'>
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />


                </div>
            </div>
            <div className='flex flex-col items-center text-center gap-4'>
                <div>
                    <img className='size-28' src={Review3} alt="Review" />
                </div>
                <div>
                    <FontAwesomeIcon className='size-8' icon={faQuoteRight} />
                </div>
                <div>
                    <p className='font-normal text-base'>It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.</p>
                    <p className='font-normal text-base'>Kaylynn Rhiel Madsen</p>
                </div>
                <div className='flex gap-3'>
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />
                    <FontAwesomeIcon color='#f8d254' size='2x' icon={faStar} />


                </div>
            </div>
        </div>
    )
}

export default Reviews