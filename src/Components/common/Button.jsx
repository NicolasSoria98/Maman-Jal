import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/buttons.css';

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  icon,
  className = '',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

  // Si tiene "to", es un Link de React Router
  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        <span className="btn-text">{children}</span>
        {icon && <span className="btn-icon">{icon}</span>}
      </Link>
    );
  }

  // Si tiene "href", es un enlace externo
  if (href) {
    return (
      <a href={href} className={buttonClass} target="_blank" rel="noopener noreferrer" {...props}>
        <span className="btn-text">{children}</span>
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  // Si no, es un botón normal
  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      <span className="btn-text">{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;