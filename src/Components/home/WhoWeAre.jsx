import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import '../../styles/components/whoweare.css';

const WhoWeAre = () => {
  const navigate = useNavigate();

  const handleGetToKnowUs = () => {
    navigate('/about');
  };

  return (
    <section className="who-we-are">
      <div className="container">
        <div className="who-we-are-content">
          {/* Botón izquierdo */}
          <div className="who-we-are-left">
            <Button 
              onClick={handleGetToKnowUs}
              variant="outline"
              className="get-to-know-btn"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              }
            >
              Get to know us
            </Button>
          </div>

          {/* Texto derecho */}
          <div className="who-we-are-right">
            <h2 className="section-title">
              WHO<br />WE ARE
            </h2>
            <p className="section-description">
              MAMAN & JAL is a full-service design-build firm based in BWOOD, offering custom homes that are both beautiful and functional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;