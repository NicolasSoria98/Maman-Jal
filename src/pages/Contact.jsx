import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact - MAMAN & JAL';
  }, []);

  return (
    <div className="page contact-page">
      <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
        <h1>Contact Page</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default Contact;