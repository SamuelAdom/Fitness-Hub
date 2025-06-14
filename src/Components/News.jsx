import React from "react";
import { assets } from "../assets/asset";
import NewsCard from "./NewsCard";
import { latestNews } from "../assets/asset";

const News = () => {
  return (
    <div
      className="relative -top-10  bg-cover bg-center md:top-0 "
      style={{ backgroundImage: `url(${assets.features_background})` }}
    >
      <div className="flex items-center flex-col space-y-5 mt-10  p-3 md:p-7 lg:p-30 md:mt-0">
        <h1 className=" text-4xl md:w-full md:text-4xl font-bold text-white text-center ">
          {" "}
          <span className="border-b-4  border-[#C6FF00] pb-2 inline-block">
            LATEST
          </span>
          <span className="text-[#C6FF00]"> NEWS</span>{" "}
        </h1>
        <p className="text-sm md:text-lg font-extrabold text-white lg:w-150 text-center">
          Making the decision to join a gym is a great first step towards
          improving your health and quality of life.
        </p>
      </div>
    <div className="grid grid-cols-1 mt-30 lg:mt-0 lg:grid-cols-2 lg:p-30 space-y-3.5 lg:gap-2.5 relative bottom-30 ">
        {latestNews.map((items)=>{
            return(
                <div key={items.id}>
                    <NewsCard items={items}/>
                </div>
            )
        })}
    </div>
    </div>
  );
};

export default News;
