import React from 'react'
import { assets } from '../../assets/asset'
import Profile from './Components/Profile'
import { teamMem } from '../../assets/asset'
import GetStarted from '../About/Components/GetStarted'


const TeamPage = () => {
  return (
<>
    <div className="relative bg-cover bg-center h-80 lg:h-120" style={{backgroundImage:`url(${assets.Team_hero})`}}>
      <h1 className="flex justify-center items-center h-full md:text-8xl text-6xl text-white font-extrabold">Our Team</h1>
    </div>
    <section className='bg-[#393E41]  py-10 px-5 md:gap-0 lg:py-0 lg:gap-20"'>
 <h1 className="text-5xl md:text-6xl lg:text-4xl font-bold text-center lg:text-left text-white py-7">
            <span className="border-b-2 border-[#C6FF00] inline-block pb-1.5 ">Our</span> Team
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:p-20 gap-2 '>
          {teamMem.map((item)=>{
            return(
              <div key={item.id}>
                <Profile item={item}/>
              </div>
            )
          })}
          </div>
    </section>
     <div className='flex flex-col lg:flex-row items-start lg:items-stretch md:justify-around  relative bg-cover bg-center lg:h-40 h-80' style={{backgroundImage:`url(${assets.Team_hero})`}}>
        <div className='flex gap-3 lg:gap-0 flex-col justify-center p-1.5 lg:p-20 space-y-2  text-white'>
          <h1 className='text-3xl font-extrabold mt-7 lg:mt-0 md:text-4xl lg:text-4xl'>Encompassing All Accessible Exclusive Training</h1>
          <p className='text-[22px] md:text-3xl lg:text-2xl'>We offer extensive training programs.</p>
        </div>
    <div className='flex p-2 md:mt-0 md:items-center'>
      <GetStarted/>
    </div>
      </div>
    </>
  )
}

export default TeamPage