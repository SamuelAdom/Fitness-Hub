import React from 'react';
import { assets } from '../../assets/asset';
import Dropdown from './Components/Dropdown'
import Accordion from './Components/Accordion.jsx'
import Card from './Components/Card.jsx'
import OpenTimes from './Components/OpenTimes.jsx'
import NewsLetter from './Components/NewsLetter.jsx'
import EmergencyCard from './Components/EmergencyCard.jsx';


const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-80 lg:h-screen"
        style={{ backgroundImage: `url(${assets.About_img})` }}
      >
        <h1 className="flex justify-center items-center h-full text-white text-5xl md:text-8xl font-extrabold">
          About
        </h1>
      </div>

      {/* Main Content Section */}
      <section className="flex flex-col md:flex-row md:items-start bg-[#393E41] min-h-screen py-10 px-5 md:gap-5 lg:py-0 lg:gap-20">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-start space-y-6 text-white lg:p-25">
          <h1 className="text-[25px] lg:text-4xl font-bold text-center lg:text-left">
            <span className="border-b-2 border-[#C6FF00] inline-block">Why</span> Choose FitnessHub
          </h1>

          <p className="text-[#C6FF00] md:text-[16px] md:w-100 lg:w-full leading-7 lg:max-w-2xl">
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
          <div className=' flex flex-col items-start space-y-3.5'>
             <h1 className="text-[25px] lg:text-4xl font-bold text-center lg:text-left">
            <span className="border-b-2 border-[#C6FF00] inline-block">Quality</span> and Safety
          </h1>
          <p className='font-light text-[17px] md:text-lg'>At FitnessHub, your health and well-being are our top priorities. We are committed to delivering the highest standards of quality across all our services — from expert-led training programs to the cleanliness and safety of our facilities.</p>
          
          <Accordion/>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col justify-center text-white space-y-4 text-lg font-medium">
         
                <Card/>
                <OpenTimes/>
                <NewsLetter/>
                <EmergencyCard/>
                <img className='w-full md:full lg:w-80 h-fit' src={assets.Extra} />
                
           
        </div>
      </section>
    </>
  );
};

export default About;
