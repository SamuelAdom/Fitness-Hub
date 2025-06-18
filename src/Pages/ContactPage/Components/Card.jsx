import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-[#393E41] text-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 duration-300 w-full sm:w-80 mt-4">
      <div className="text-3xl text-[#C6FF00] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
