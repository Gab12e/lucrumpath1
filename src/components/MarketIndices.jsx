import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from 'react-icons/io';




const MarketIndices = () => {
  return (
    <div className='lg:py-[2rem] bg-indibg bg-cover w-full'>
        <div className='container mx-auto'>
            <h1 className='text-center font-bold text-2xl'>Top trading assets and unique market indices</h1>
            <Link to='/CardOne'>
              <button className='btn gap-x-6 pl-6 justify-center mx-auto text-sm lg:h-16 lg:text-base' data-aos='fade-up'
                data-aos-delay='700'>Open here
                <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
              </button>
            </Link>
        </div>
        
    </div>
  )
}

export default MarketIndices