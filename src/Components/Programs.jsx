import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/asset";
import { workingDay } from "../assets/asset";
import MoreCard from "./MoreCard";

const Programs = () => {
  return (
    <div
      className="relative bg-cover bg-center py-15 md:py-20  md:mt-0"
      style={{ backgroundImage: `url(${assets.bg_programs})` }}
    >
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-4xl mt-10 md:text-4xl font-bold text-white">
          <span className="border-b-4 border-[#C6FF00] pb-2 inline-block">
            OUR
          </span>{" "}
          <span className="text-[#C6FF00]">PROGRAMS</span>
        </h1>
        <p className="font-bold text-white text-sm md:text-[18px] mt-4">
          At FitnessHub, we teach functional movements <br />
          with emphasis on technique, progression, and efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white px-6 md:px-16 mt-10">
        {workingDay.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              key={item.id}
              className="relative"
            >
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={item.img}
                alt={item.title}
              />
              <div className="absolute bottom-4 left-4 bg-black/60 p-3 rounded">
                <p className="text-sm">{item.day}</p>
                <p className="text-lg font-bold">{item.title}</p>
              </div>
            </motion.div>
          );
        })}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="flex justify-center items-center"
        >
          <MoreCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Programs;
