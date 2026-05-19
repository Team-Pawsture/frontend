import React from 'react';

import { cn } from '@/utils/cn';

interface ChipProps {
  label: string;
  className?: string;
}

export const Chip = ({ label, className }: ChipProps): React.ReactElement => {
  return <div className={cn('body2 rounded-full border px-3 py-1', className)}>{label}</div>;
};
