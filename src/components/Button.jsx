import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Button = ({ 
  children, 
  className = '', 
  variant = 'lg',
  to = '',
  href = '',
  routerLink = '',
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'btn flex justify-center items-center';
  const sizeStyles = variant === 'sm' ? 'btn-sm' : 'btn-lg';
  const combinedStyles = `${baseStyles} ${sizeStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  if (routerLink) {
    return (
      <RouterLink to={routerLink} className={combinedStyles} {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <button 
      type={type}
      className={combinedStyles}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 