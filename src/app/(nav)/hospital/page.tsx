'use client';

import { useState } from 'react';

import { Dropdown, HospitalCard } from '@/components/hospital';
import { MOCK_HOSPITAL_LIST } from '@/mocks';
import type { HospitalSortType } from '@/types/hospital.types';

const HospitalPage = (): React.ReactElement => {
  const [sortType, setSortType] = useState<HospitalSortType>('recommended');

  return (
    <div className="flex flex-col">
      <div className="bg-gray-0 sticky top-15 z-10 flex items-center justify-between px-5 pb-2">
        <p className="subhead3">
          총 <span className="text-primary">{MOCK_HOSPITAL_LIST.total}</span>개
        </p>
        <Dropdown value={sortType} onChange={setSortType} />
      </div>
      <div className="mt-1 flex flex-col gap-4 px-5 pb-4">
        {MOCK_HOSPITAL_LIST.hospitals.map((hospital, index) => (
          <HospitalCard key={hospital.hospitalId ?? index} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default HospitalPage;
