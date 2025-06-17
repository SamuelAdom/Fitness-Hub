import React from 'react';
import { departments } from '../../../assets/asset';
const Card = () => {
  return (
    <div className="relative drop-shadow-xl 2-full mt-10 md:w-80 h-50 lg:mt-30 md:h-60 overflow-hidden bg-[#3d3c3d]">
      <div className="absolute fle text-white z-[1] opacity-90  inset-0.5 bg-[#323132]">
        <div className='flex flex-col p-3 space-y-2.5'>
            <h1 className='text-lg md:text-2xl '>Departments</h1>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-lg">
        {departments.map((item) => (
          <li key={item.id} className="text-[#C6FF00] text-lg lg:text-[16px] font-medium">
            {item.point}
          </li>
        ))}
      </ul>
        </div>
      </div>
      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2" />
    </div>
  );
}

export default Card;
