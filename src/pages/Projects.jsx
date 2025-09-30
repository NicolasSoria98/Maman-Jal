import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Projects - MAMAN & JAL';
  }, []);

  return (
    <div className="page projects-page">
      <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
        <h1>Projects Page</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default Projects;