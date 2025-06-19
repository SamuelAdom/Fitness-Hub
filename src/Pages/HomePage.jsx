import React from 'react';
import HeroSection from '../Components/HeroSection';
import WelcomeMsg from '../Components/WelcomeMsg';
import Programs from '../Components/Programs';
import Team from '../Components/Team';
import News from '../Components/News';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <WelcomeMsg />
      <Programs />
      <Team />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
