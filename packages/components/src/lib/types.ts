import { ReactNode } from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface SideBarProps extends BaseComponentProps {
  isOpen?: boolean;
}
