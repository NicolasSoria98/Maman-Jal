import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import '../../styles/components/ourwork.css';

const OurWork = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Datos temporales de proyectos - luego los traeremos de projectsData.js
  const featuredProjects = [
    {
      id: 1,
      title: 'Stradella "C"',
      image: '/assets/images/projects/stradella-c/main.jpg',
      category: 'RESIDENTIAL'
    },
    {
      id: 2,
      title: 'Mango "B"',
      image: '/assets/images/projects/mango-b/main.jpg',
      category: 'RESIDENTIAL'
    },
    {
      id: 3,
      title: 'Arbutus',
      image: '/assets/images/projects/arbutus/main.jpg',
      category: 'RESIDENTIAL'
    }
  ];

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="our-work">
      <div className="container">
        {/* Header con título y progreso */}
        <div className="our-work-header">
          <div className="our-work-header-left">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${((currentSlide + 1) / featuredProjects.length) * 100}%` }}></div>
            </div>
            <span className="progress-text">
              {String(currentSlide + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
            </span>
          </div>

          <div className="our-work-title-section">
            <h2 className="our-work-title">OUR WORK</h2>
            <p className="our-work-description">
              Discover our portfolio of completed projects showcasing the quality and craftsmanship of our work.
            </p>
          </div>

          <div className="our-work-header-right">
            <Button 
              onClick={handleViewProjects}
              variant="secondary"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              }
            >
              View projects
            </Button>
          </div>
        </div>

        {/* Carrusel de proyectos */}
        <div className="projects-carousel">
          <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="carousel-slide"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <button className="project-view-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles del carrusel */}
          <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;