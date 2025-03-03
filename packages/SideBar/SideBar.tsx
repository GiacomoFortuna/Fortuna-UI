import React from 'react';
import './SideBar.css';

export interface SideBarProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  className?: string;
}

export const SideBar: React.FC<SideBarProps> = ({ 
  children,
  isOpen = true,
  className
}) => {
  return (
    <aside className={`oni-sidebar ${isOpen ? 'open' : ''} ${className || ''}`}>
      <div className="oni-sidebar-content">
        {children}
      </div>
    </aside>
  );
};

export default SideBar;
