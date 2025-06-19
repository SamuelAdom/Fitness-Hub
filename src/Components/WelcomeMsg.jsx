import React from "react";
import{motion} from 'framer-motion'
import { assets } from "../assets/asset";
import { Link } from "react-router-dom";

const WelcomeMsg = () => {
  return (
    <div className=" flex flex-col lg:flex-row  bg-[#393E41]">
      <div className="flex flex-col mt-18 p-3 md:p-10 lg:p-30 md:mt-0 space-y-7">
        <h1 className=" text-4xl w-70 md:w-full md:text-4xl font-bold text-white "> <span className="border-b-4  border-[#C6FF00] pb-2 inline-block">WE</span>LCOME TO <span className="text-[#C6FF00]">FITNESSHUB</span> </h1>
        <p className="text-md  md:text-lg font-extrabold text-white md:w-150">SINCE DAY ONE, OUR GYM CLASSES HAVE BEEN AN INSPIRING AND WELCOMING EXPERIENCE FOR EVERYONE!</p>
        <p className="text-md md:text-lg font-light text-white md:w-150">We make every attendee feel like part of one big, passionate community! And our fitness instructors are always here to support you whenever you need a hand.</p>
        <p className="text-m md:text-lg font-light text-white md:w-150">Their mission? To help you become as fit and strong as possible. Just show up at FitnessHub—your transformation starts the moment you walk in!</p>
        <div>
       <Link to={'/about'}> <button className="cursor-pointer font-semibold overflow-hidden relative z-10 border border-[#C6FF00] group px-8 py-2 mt-8">
      <span className="relative z-10 text-[#C6FF00] group-hover:text-white text-xl duration-500">READ MORE</span>
      <span className="absolute w-full h-full bg-[#C6FF00] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
      <span className="absolute w-full h-full bg-[#C6FF00] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
    </button>
    </Link>
        </div>
      </div>
      <motion.div
      initial={{opacity:0, translateX:"-100%"}}
      whileInView={{opacity:1, translateX:0}}
      transition={{duration:2}}
      
      
      className="flex justify-center mt-7 md:mt-0 lg:p-30 lg:mt-0">
  <img
    src={assets.team_4}
    alt="Instructor"
    className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto border-4 md:border-8 border-[#C6FF00] object-cover rounded-xl shadow-lg"
  />
</motion.div>

    </div>
  );
};

export default WelcomeMsg;
