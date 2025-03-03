import React from 'react';
import './SearchBar.css';

export interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = 'Search...',
  onChange,
  className
}) => {
  return (
    <div className={`oni-searchbar ${className || ''}`}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="oni-searchbar-input"
      />
    </div>
  );
};

export default SearchBar;
