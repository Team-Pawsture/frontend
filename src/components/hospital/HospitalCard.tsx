import Image from 'next/image';
import React from 'react';

import { Chip } from '@/components/common/Chip';
import { IcClock, IcHome, IcLocation } from '@/components/icons';
import { OPERATION_STATUS_LABEL, OPERATION_STATUS_STYLE } from '@/constants/hospital';
import type { Hospital } from '@/types/hospital.types';

interface HospitalCardProps {
  hospital: Hospital;
}

export const HospitalCard = ({ hospital }: HospitalCardProps): React.ReactElement => {
  const { name, address, today_hours, operation_status, image_url, map_url } = hospital;

  return (
    <div className="bg-gray-0 shadow-card flex items-center justify-between gap-4 rounded-(--radius-md) p-4">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <h3 className="subhead5 text-gray-400">{name}</h3>
          {operation_status && (
            <Chip
              label={OPERATION_STATUS_LABEL[operation_status]}
              className={`${OPERATION_STATUS_STYLE[operation_status]} px-2 py-0.5`}
            />
          )}
        </div>
        {address && (
          <div className="flex items-center gap-1">
            <IcLocation size={14} className="shrink-0 text-gray-300" />
            <span className="body3 text-gray-300">{address}</span>
          </div>
        )}
        {today_hours && (
          <div className="flex items-center gap-1">
            <IcClock size={14} className="shrink-0 text-gray-300" />
            <span className="body3 text-gray-300">{today_hours}</span>
          </div>
        )}
        {map_url && (
          <a
            href={map_url}
            target="_blank"
            rel="noopener noreferrer"
            className="body3 text-primary mt-0.5 flex w-fit items-center gap-0.5 underline-offset-2 hover:underline"
          >
            지도 보기
          </a>
        )}
      </div>
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-blue-100">
        {image_url ? (
          <Image src={image_url} alt={name} fill className="object-cover" />
        ) : (
          <IcHome size={24} className="text-blue-200" />
        )}
      </div>
    </div>
  );
};
