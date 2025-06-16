import React from 'react'
import { assets } from '../../assets/asset'

const About = () => {
  return (
    <>
    <div className='relative bg-cover h-80 lg:h-screen md:bg-center' style={{backgroundImage: `url(${assets.About_img})`}}>
      <h1 className='flex justify-center items-center h-80  lg:justify-start md:p-48 text-white text-5xl md:text-8xl font-extrabold'>ABOUT</h1>
    </div>
    <section className='flex flex-col lg:flex-row lg:justify-around bg-[#393E41] h-screen pb-2 pt-5'>
      <div className='flex flex-col space-y-3 text-white text-center'>
        <h1 className='text-[28px] lg:text-4xl font-bold'><span className='border-b-2  border-[#C6FF00]  inline-block'>Why</span> Choose FitnessHub</h1>
        <p className='leading-7 md:leading-8 text-lg  font-light text-[#C6FF00] lg:w-2xl md:text-lg'>All our programs are designed and led by certified professionals with years of hands-on experience in personal training, strength building, and wellness coaching.</p>
        <div className="w-full max-w-3xl h-[420px] mx-auto">
  <iframe
    className="w-full h-full rounded-lg"
    src="https://www.youtube.com/embed/4-zjQvTDnbw"
    title="YouTube video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <p className='mt-2.5 font-light'>At FitnessHub, you're not just joining a gym — you're becoming part of a supportive family. Our community uplifts, motivates, and celebrates every step of your fitness journey. Whether you're a beginner or a pro, there's always someone cheering you on.</p>
</div>

      </div>
      <div className='flex flex-col justify-center items-center mt-3.5'>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

    </section>
    </>
    
  )
}

export default About