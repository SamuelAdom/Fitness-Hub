import React from 'react'
import {assets} from '../assets/asset'
import HomeContact from './HomeContact'
import HomeNav from './HomeNav'


const HeroSection = () => {
  return (
    <div className='relative h-screen  bg-cover sm:bg-center' style={{backgroundImage: `url(${assets.hero})`}}>
     <HomeContact/>
     <HomeNav/>
    

      
    </div>

  )
}

export default HeroSection