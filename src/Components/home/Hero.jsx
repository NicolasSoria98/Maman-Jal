import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import '../../styles/components/hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  return (
    <section className="hero">
      {/* Imagen de fondo - reemplaza con tu imagen real */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
        {/* Aquí irá tu imagen de fondo */}
        <img 
          src="/assets/images/hero/hero-main.jpg" 
          alt="Luxury modern villa with pool" 
          className="hero-image"
        />
      </div>

      {/* Contenido del Hero */}
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            DESIGN /<br />
            CONSTRUCTION
          </h1>
          
          <Button 
            onClick={handleViewProjects}
            variant="primary"
            size="large"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            }
            className="hero-button"
          >
            View projects
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;