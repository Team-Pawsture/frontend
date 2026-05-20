'use client';

import { Input } from '@/components/common';
import { MEDICAL_HISTORY_LABEL } from '@/constants/pet';
import type { MedicalHistory } from '@/types/pet.types';
import { cn } from '@/utils/cn';

interface MedicalHistorySelectProps {
  value: MedicalHistory[];
  onChange: (value: MedicalHistory[]) => void;
  etcValue: string;
  onEtcChange: (value: string) => void;
}

export const MedicalHistorySelect = ({
  value,
  onChange,
  etcValue,
  onEtcChange,
}: MedicalHistorySelectProps): React.ReactElement => {
  const handleToggle = (key: MedicalHistory) => {
    if (key === 'NONE') {
      onChange(['NONE']);
      return;
    }
    const withoutNone = value.filter((item) => item !== 'NONE');
    onChange(
      withoutNone.includes(key)
        ? withoutNone.filter((item) => item !== key)
        : [...withoutNone, key],
    );
  };

  return (
    <div className="flex w-full flex-col">
      <p className="subhead6 text-blue-700">과거 병력 (중복 가능)</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {(Object.keys(MEDICAL_HISTORY_LABEL) as MedicalHistory[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => handleToggle(key)}
            className={cn(
              'body3 rounded-full border px-3 py-1.5 transition-all',
              value.includes(key)
                ? 'border-primary text-primary bg-blue-50'
                : 'bg-gray-0 border-blue-200 text-gray-300',
            )}
          >
            {MEDICAL_HISTORY_LABEL[key]}
          </button>
        ))}
      </div>
      {value.includes('OTHER') && (
        <Input
          name="medicalHistoryEtc"
          placeholder="기타 병력을 입력해주세요"
          value={etcValue}
          onChange={(e) => onEtcChange(e.target.value)}
        />
      )}
      <div className="mt-1 min-h-5" />
    </div>
  );
};
