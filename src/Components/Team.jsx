import React from "react";
import TeamCard from './TeamCard'
import { teamMem } from "../assets/asset";

const Team = () => {
  return (
    <>
    <div className=" flex flex-col justify-center text-center relative   bg-[#393E41]">
      <div className="flex items-center flex-col space-y-5 mt-10  p-3 md:p-7 lg:p-30 md:mt-0">
        <h1 className=" text-4xl md:w-full md:text-4xl font-bold text-white ">
          {" "}
          <span className="border-b-4  border-[#C6FF00] pb-2 inline-block">
            BEST
          </span>
          <span className="text-[#C6FF00]"> TEAM</span>{" "}
        </h1>
        <p className="text-sm md:text-lg font-extrabold text-white lg:w-150">
          There’s nothing better than having your very own coach and mentor.
          Need an extra push? They are ready!
        </p>
      </div>
        <div className="flex p-10 gap-10 justify-center items-center flex-col md:flex-row">
        {teamMem.map((item)=>{
          return(
            <TeamCard item={item} key={item.id}/>
          )
        })}

      </div>
      
    </div>
  
      </>
  );
};

export default Team;
