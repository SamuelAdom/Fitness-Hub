import React from 'react';
import { assets } from '../../assets/asset';
import Dropdown from './Components/Dropdown';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-80 lg:h-screen"
        style={{ backgroundImage: `url(${assets.About_img})` }}
      >
        <h1 className="flex justify-center items-center h-full text-white text-5xl md:text-8xl font-extrabold">
          ABOUT
        </h1>
      </div>

      {/* Main Content Section */}
      <section className="flex flex-col lg:flex-row md:items-start bg-[#393E41] min-h-screen py-10 px-6 gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start space-y-6 text-white lg:p-25">
          <h1 className="text-[25px] lg:text-4xl font-bold text-center lg:text-left">
            <span className="border-b-2 border-[#C6FF00] inline-block">Why</span> Choose FitnessHub
          </h1>

          <p className="text-[#C6FF00] md:text-[20px] font-bold leading-7 lg:max-w-2xl">
            All our programs are designed and led by certified professionals with years of hands-on experience in personal training, strength building, and wellness coaching.
          </p>

          <div className="w-full max-w-3xl h-[420px] mx-auto lg:mx-0">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/4-zjQvTDnbw"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-white text-base leading-7 text-[15px] font-light md:text-lg lg:max-w-2xl">
            At FitnessHub, you're not just joining a gym — you're becoming part of a supportive family. Our community uplifts, motivates, and celebrates every step of your fitness journey. Whether you're a beginner or a pro, there's always someone cheering you on.
          </p>

          <Dropdown />
          <div className='space-y-3.5'>
             <h1 className="text-[25px] lg:text-4xl font-bold text-center lg:text-left">
            <span className="border-b-2 border-[#C6FF00] inline-block">Quality</span> and Safety
          </h1>
          <p className='font-light text-[17px] md:text-lg'>At FitnessHub, your health and well-being are our top priorities. We are committed to delivering the highest standards of quality across all our services — from expert-led training programs to the cleanliness and safety of our facilities.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col justify-center text-white space-y-4 text-lg font-medium">
          <p>💪 Get stronger with every rep</p>
          <p>🔥 Burn fat with intense cardio</p>
          <p>🍽️ Eat clean, feel better</p>
          <p>🧠 Build mental and physical discipline</p>
        </div>
      </section>
    </>
  );
};

export default About;
