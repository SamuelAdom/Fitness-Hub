import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden duration-500 w-full lg:w-64 h-full bg-transparent text-gray-50 p-5 md:bottom-20">
      <div className="w-full max-w-md mx-auto overflow-hidden rounded-lg ">
  <img
    src={item.img}
    alt={item.name}
    className="w-full h-100 group-hover:scale-110 duration-500 object-cover"
  />
</div>

     
      <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12 overflow-hidden">
        <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900" />

        <div className="opacity-0 group-hover:opacity-100 duration-500">
          <span className="text-xl font-bold block">{item.name}</span>
          <p className="w-56">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
