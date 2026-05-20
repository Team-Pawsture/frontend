'use client';

import { useEffect, useRef, useState } from 'react';

import { IcArrowDown } from '@/components/icons';
import { cn } from '@/utils/cn';

interface DropdownProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  name?: string;
  placeholder?: string;
}

export const Dropdown = ({
  options,
  value,
  onChange,
  label,
  name,
  placeholder,
}: DropdownProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="flex w-full flex-col">
      {label && (
        <label htmlFor={name} className="subhead3 text-blue-700">
          {label}
        </label>
      )}
      <div ref={dropdownRef} className="relative mt-2">
        <button
          id={name}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={name ? `${name}-listbox` : undefined}
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            'body1 flex w-full items-center justify-between rounded-md border px-5 py-3 transition-all outline-none',
            'bg-gray-0',
            isOpen ? 'border-primary bg-blue-50' : 'border-blue-200',
          )}
        >
          <span className={cn(selectedLabel ? 'text-cool-900' : 'text-gray-300')}>
            {selectedLabel ?? placeholder}
          </span>
          <IcArrowDown
            size={16}
            className={cn(
              'shrink-0 text-gray-300 transition-transform duration-200',
              isOpen && 'rotate-180',
            )}
          />
        </button>
        {isOpen && (
          <ul
            id={name ? `${name}-listbox` : undefined}
            role="listbox"
            className="bg-gray-0 absolute top-full left-0 z-20 mt-1 max-h-52 w-full overflow-y-auto rounded-md border border-blue-200 shadow-sm"
          >
            {options.map((option) => (
              <li key={option.value}>
                <button
                  role="option"
                  aria-selected={option.value === value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    'body1 w-full px-5 py-3 text-left transition-colors hover:bg-blue-50',
                    option.value === value ? 'text-primary' : 'text-gray-400',
                  )}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-1 min-h-5" />
    </div>
  );
};
