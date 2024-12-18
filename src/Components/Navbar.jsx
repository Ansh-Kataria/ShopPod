import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center pt-10 px-32 '>
            <div className='flex gap-14 items-center'>
                <div className='flex font-bold text-2xl'>
                    <p className='text-[#424242]'>Shop  </p>
                    <p className='text-[#51998D]'>Pod</p>
                </div>
                <div className='flex gap-10 text-[#262626] text-base font-normal'>
                    <a href=" ">Home</a>
                    <a href="">About</a>
                    <a href="">Testimonials</a>
                    <a href="">Blogs</a>
                </div>

            </div>

            <button className='bg-[#1f2027] font-normal text-base py-4 px-8 text-[#FEFEF2] rounded-md cursor-pointer'>
                Sign In
            </button>
        </div>
    )
}

export default Navbar;