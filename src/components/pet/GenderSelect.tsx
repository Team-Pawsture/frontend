'use client';

import { GENDER_LABEL } from '@/constants/pet';
import type { Gender } from '@/types/pet.types';
import { cn } from '@/utils/cn';

interface GenderSelectProps {
  value: Gender | null;
  onChange: (value: Gender) => void;
}

export const GenderSelect = ({ value, onChange }: GenderSelectProps): React.ReactElement => {
  return (
    <div className="flex w-full flex-col">
      <p className="subhead3 text-blue-700">성별</p>
      <div className="mt-2 flex gap-3">
        {(Object.keys(GENDER_LABEL) as Gender[]).map((gender) => (
          <button
            key={gender}
            type="button"
            onClick={() => onChange(gender)}
            className={cn(
              'body1 flex-1 rounded-md border py-3 transition-all',
              value === gender
                ? 'border-primary text-primary bg-blue-50'
                : 'bg-gray-0 border-blue-200 text-gray-300',
            )}
          >
            {GENDER_LABEL[gender]}
          </button>
        ))}
      </div>
      <div className="mt-1 min-h-5" />
    </div>
  );
};
