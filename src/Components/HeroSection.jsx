import React from 'react'
import {assets} from '../assets/asset'
import HomeContact from './HomeContact'
import HomeNav from './HomeNav'


const HeroSection = () => {
  return (
    <div className='relative h-screen bg-cover md:bg-fixed md:bg-center' style={{backgroundImage: `url(${assets.hero})`}}>
     <HomeContact/>
     <HomeNav/>
    
    </div>

  )
}

export default HeroSection