import React from 'react'
import CountdownTimer from '../login/components/CountdownTimer'


export default function SpecialOffer() {
  return (
    <div className='special h-[75vh] w-[490px] lg:w-[1140px]'>
      <div className="mx-auto max-w-7xl">
        <span className='bg-[#759b3f22] text-sm lg:text-base  px-4 py-2.5 rounded text-[#749B3F] font-bold'>Special Offer</span>
        <h2 className='lg:text-4xl text-3xl font-bold my-3'>Seasonal Fruit Bundle</h2>
        <h3 className='lg:text-3xl font-bold text-2xl'>Discount up to <span className='text-[#FF6A1A]'>80% OFF</span></h3>
        

        <CountdownTimer targetDate="2025-06-02T00:00:00" />
        <div className="mt-7">
            <span className='bg-[#176D38] px-5 py-3 rounded-full font-extrabold'>CODE : <span className='text-warning'>FRESH28</span></span>
      </div>
        </div>
      
    </div>
  )
}
