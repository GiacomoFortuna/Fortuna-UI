import React from 'react';
import './NavBar.css';

export interface NavBarProps {
  logo?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ logo, children, className }) => {
  return (
    <nav className={`oni-navbar ${className || ''}`}>
      {logo && <div className="oni-navbar-logo">{logo}</div>}
      <div className="oni-navbar-content">{children}</div>
    </nav>
  );
};

export default NavBar;
