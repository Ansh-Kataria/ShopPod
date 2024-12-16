import React from 'react'
import P1 from "../assets/P1.png"
import P2 from "../assets/P2.png"
import P3 from "../assets/P3.png"
import P4 from "../assets/P4.png"
import P5 from "../assets/P5.png"

const Partners = () => {
    return (
        <div className='flex flex-col items-center mt-32 '>
            <p className='font-medium text-lg text-[#1f2027]'>Supported By</p>
            <div className='flex items-center gap-14'>
                <img src={P1} alt="P1" />
                <img src={P2} alt="P2" />
                <img src={P5} alt="P5" />
                <img src={P3} alt="P3" />
                <img src={P4} alt="P4" />
            </div>
        </div>
    )
}

export default Partners