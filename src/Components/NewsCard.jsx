import React from 'react';

const NewsCard = ({items}) => {
  return (
   <a
  href="#"
  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-[#393E41] dark:hover:bg-gray-700"
>
  <img
    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-95 lg:w-70 md:rounded-none md:rounded-s-lg"
    src={items.img}
    alt=""
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#C6FF00] lg:hover:text-white md:hover:transition-all duration-500">
      {items.heading}
    </h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {items.description}
    </p>
    <p className="mb-3 font-normal text-gray-700 dark:text-white lg:hover:text-[#C6FF00] md:hover:transition-all duration-500 ">
      {items.time}
    </p>
  </div>
</a>

  );
}

export default NewsCard;
