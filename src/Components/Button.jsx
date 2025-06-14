import React from 'react';

const Button = () => {
  return (
    <button className="cursor-pointer font-semibold overflow-hidden relative z-10 border border-[#C6FF00] group px-8 py-4 mt-8">
      <span className="relative z-10 text-[#C6FF00] group-hover:text-white text-xl duration-500">TRAIN NOW !</span>
      <span className="absolute w-full h-full bg-[#C6FF00] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
      <span className="absolute w-full h-full bg-[#C6FF00] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
    </button>
  );
}

export default Button;
