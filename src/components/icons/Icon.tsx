import React from 'react';
import { IconProps } from '@/types/icon.types';

export const Icon = ({ size = 24, className }: IconProps): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="130" height="130" rx="12" fill="#3A88C8" />
      <ellipse
        cx="12.5"
        cy="11.5"
        rx="12.5"
        ry="11.5"
        transform="matrix(-1 0 0 1 62 15.5)"
        fill="#C9DEF1"
      />
      <ellipse cx="80.5" cy="27" rx="12.5" ry="11.5" fill="#C9DEF1" />
      <ellipse
        cx="12.5"
        cy="11.5"
        rx="12.5"
        ry="11.5"
        transform="matrix(-1 0 0 1 41 39.5)"
        fill="#C9DEF1"
      />
      <ellipse cx="102.5" cy="51" rx="12.5" ry="11.5" fill="#C9DEF1" />
      <ellipse cx="65.5" cy="89" rx="30.5" ry="25.5" fill="#F8FBFF" />
    </svg>
  );
};
