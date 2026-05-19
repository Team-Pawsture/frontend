'use client';

import React, { useEffect, useRef, useState } from 'react';

import { IcArrowDown } from '@/components/icons';
import { SORT_OPTIONS } from '@/constants/hospital';
import type { HospitalSortType } from '@/types/hospital.types';
import { cn } from '@/utils/cn';

interface DropdownProps {
  value: HospitalSortType;
  onChange: (value: HospitalSortType) => void;
}

export const Dropdown = ({ value, onChange }: DropdownProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel = SORT_OPTIONS.find((option) => option.value === value)?.label ?? '';

  const handleSelect = (selectedValue: HospitalSortType) => {
    onChange(selectedValue);
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
    <div ref={dropdownRef} className="relative w-fit">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="body3 flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-gray-400"
      >
        {selectedLabel}
        <IcArrowDown
          size={10}
          className={cn('text-gray-300 transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>
      {isOpen && (
        <ul className="bg-gray-0 absolute top-full left-0 z-10 mt-1 min-w-full overflow-hidden rounded-sm border border-gray-200 shadow-sm">
          {SORT_OPTIONS.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => handleSelect(option.value)}
                className={cn(
                  'body3 w-full px-4 py-2.5 text-left hover:bg-gray-100',
                  value === option.value ? 'text-primary' : 'text-gray-400',
                )}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
