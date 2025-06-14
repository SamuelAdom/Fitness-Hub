import React from 'react'
import HeroSection from '../Components/HeroSection'
import WelcomeMsg from '../Components/WelcomeMsg'
import Programs from '../Components/Programs'
import Team from '../Components/Team'
import News from '../Components/News'
import Contact from '../Components/Contact'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <WelcomeMsg/>
      <Programs/>
      <Team/>
      <News/>
      <Contact/>
  
    </div>
  )
}

export default HomePage