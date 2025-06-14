import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const HomeContact = () => {
  return (
    <div className="flex flex-col md:flex-row sm:justify-around mt p-5 text-white border-b-1 border-gray-300 space-y-2.5 text-[14.6px]  sm:text-lg">
      <div className="flex justify-center items-center gap-2.5">
        <FaMapMarkerAlt />
        <p>Accra Road</p>
      </div>
      <div className="flex justify-center items-center gap-1.5 sm:gap-2.5">
        <FaClock />
        <p>Mon - Fri: 9:00AM - 5:00PM | Sat - Sun: Closed</p>
      </div>
      <div className="flex justify-center items-center gap-2.5">
      <FaPhone />
    <p className="md:hover:text-[#C6FF00] cursor-pointer">+233 54 589 2639</p>

      </div>
    </div>
  );
};

export default HomeContact;
