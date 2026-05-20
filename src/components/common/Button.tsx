import { ReactNode } from 'react';

import { cn } from '@/utils/cn';

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  className?: string;
  isDisabled?: boolean;
}

export const Button = ({
  label,
  icon,
  onClick,
  className,
  isDisabled,
}: ButtonProps): React.ReactElement => {
  return (
    <div className="h-12.5">
      <button
        type="button"
        className={cn(
          'subhead6 text-gray-0 flex h-full w-full items-center justify-center gap-1 rounded-lg',
          'bg-primary',
          'disabled:text-gray-0 disabled:cursor-not-allowed disabled:bg-gray-200',
          className,
        )}
        onClick={onClick}
        disabled={isDisabled}
      >
        {icon}
        {label}
      </button>
    </div>
  );
};
