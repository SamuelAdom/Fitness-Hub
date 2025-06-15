import React from 'react';
import { assets } from '../assets/asset';


const MoreCard = () => {
  return (
    <div className="group flex flex-col justify-start items-start gap-2 w-105 h-56 duration-500 relative rounded-lg p-4 bg-transparent hover:-translate-y-2 hover:shadow-xl shadow-[#C6FF00]">
      <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4" />
      <img src={assets.More} alt="" />
       <button className="cursor-pointer font-semibold overflow-hidden relative z-10 border border-[#C6FF00] group px-5 py-8 mt-1 bottom-15 left-30 ">
      <span className="relative z-10 text-[#C6FF00] group-hover:text-white text-xl duration-500">MORE PROGRAMS</span>
      <span className="absolute w-full h-full bg-[#C6FF00] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
      <span className="absolute w-full h-full bg-[#C6FF00] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
    </button>
    </div>
  );
}

export default MoreCard;
