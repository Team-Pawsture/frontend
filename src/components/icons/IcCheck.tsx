import type { IconProps } from '@/types/icon.types';

import { BaseIcon } from './BaseIcon';

export const IcCheck = ({ size = 24, className, ...props }: IconProps) => (
  <BaseIcon size={size} viewBox="0 0 30 30" className={className} {...props}>
    <path
      d="M11.9375 22.5L4.8125 15.375L6.59375 13.5938L11.9375 18.9375L23.4063 7.46875L25.1875 9.25L11.9375 22.5Z"
      fill="currentColor"
    />
  </BaseIcon>
);
