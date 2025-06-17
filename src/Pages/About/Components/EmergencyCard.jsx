import React from 'react';

const EmergencyCard = () => {
  return (
    <div className="flex items-start relative drop-shadow-xl md:w-full lg:w-80 h-55 overflow-hidden bg-[#3d3c3d]">
      <div className="absolute flex text-white z-[1] opacity-90 inset-0.5 bg-[#323132]">
        <div className='flex flex-col space-y-3 p-5'>
            <h1 className='text-[25px] md:text-2xl text-[#C6FF00]'>Emergency Cases</h1>
           <p>Email: <span className='font-serif text-lg md:text-2xl lg:text-lg'>fitnesshub@info.com</span></p>
           <p>Phone: <span className='font-serif text-lg md:text-2xl lg:text-lg'>+233 54 589 2639</span></p>
        </div>
      </div>
      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2" />
    </div>
  );
}

export default EmergencyCard;
