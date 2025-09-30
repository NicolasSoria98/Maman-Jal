import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import WhoWeAre from '../components/home/WhoWeAre';
import OurWork from '../components/home/OurWork';

const Home = () => {
  useEffect(() => {
    // Scroll to top cuando se carga la página
    window.scrollTo(0, 0);
    
    // Actualizar el título de la página
    document.title = 'MAMAN & JAL - Design & Construction';
  }, []);

  return (
    <div className="page home-page">
      <Hero />
      <WhoWeAre />
      <OurWork />
    </div>
  );
};

export default Home;