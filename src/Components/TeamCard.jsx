import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TeamCard = ({ item }) => {
  return (
    <div className="w-80 h-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group flex flex-col">
      
      {/* Image Section */}
      <div className="h-1/2">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 flex flex-col justify-between text-center">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.role}</p>
          <p className="text-sm text-gray-600 mt-2">
           {item.description}
          </p>
        </div>

        <div className="mt-4 flex justify-center space-x-4 text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
          <a href="#" className="hover:text-blue-600"><FaFacebookF size={18} /></a>
          <a href="#" className="hover:text-sky-400"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram size={18} /></a>
          <a href="#" className="hover:text-blue-700"><FaLinkedinIn size={18} /></a>
        </div>

        <button className="mt-5 px-5 py-2 bg-gradient-to-r from-[#C6FF00] to-purple-500 text-white text-sm font-medium rounded-full hover:scale-105 hover:shadow-md transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
