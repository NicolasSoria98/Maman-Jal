import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectView = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Project ${id} - MAMAN & JAL`;
  }, [id]);

  return (
    <div className="page project-view-page">
      <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
        <h1>Project View - ID: {id}</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default ProjectView;