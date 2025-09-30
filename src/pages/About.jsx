import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About - MAMAN & JAL';
  }, []);

  return (
    <div className="page about-page">
      <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
        <h1>About Page</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default About;