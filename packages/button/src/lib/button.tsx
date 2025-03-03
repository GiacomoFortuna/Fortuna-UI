declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

import * as React from 'react';
import { ReactNode } from 'react';
import styles from './button.module.css';

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const Button = ({ 
  children = 'Button',
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false
}: ButtonProps) => (
  <button 
    className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;