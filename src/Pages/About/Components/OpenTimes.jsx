import React from 'react';

const Card = () => {
  return (
    <div className="relative drop-shadow-xl md:w-80 h-55 overflow-hidden bg-[#3d3c3d]">
      <div className="absolute flex text-white z-[1] opacity-90 inset-0.5 bg-[#323132]">
        <div className='flex flex-col space-y-3 p-5'>
            <h1 className='text-[25px] md:text-2xl'>Opening Hours</h1>
            <div className='flex gap-10 '>
                <p>Monday-Friday</p>
                <p className='text-[#C6FF00] text-md lg:text-sm'>8.00 – 18.00</p>
            </div>
            <hr />
            <div className='flex gap-23.5'>
                <p>Saturday</p>
                <p className='text-[#C6FF00] text-md lg:text-sm'>9.00 – 17.00</p>
            </div>
            <hr />
             <div className='flex gap-26'>
                <p>Sunday</p>
                <p className='text-[#C6FF00] text-md lg:text-sm'>9.00 – 15.00</p>
            </div>
            
        </div>
      </div>
      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2" />
    </div>
  );
}

export default Card;
