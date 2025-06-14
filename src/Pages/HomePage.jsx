import React from 'react'
import HeroSection from '../Components/HeroSection'
import WelcomeMsg from '../Components/WelcomeMsg'
import Programs from '../Components/Programs'
import Team from '../Components/Team'
import News from '../Components/News'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <WelcomeMsg/>
      <Programs/>
      <Team/>
      <News/>
    </div>
  )
}

export default HomePage