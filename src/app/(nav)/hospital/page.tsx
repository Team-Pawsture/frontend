'use client';

import { useState } from 'react';

import { Dropdown, HospitalCard } from '@/components/hospital';
import { NoPetFallback, PetSelector } from '@/components/pet';
import useGeoLocation from '@/hooks/hospital/useGeoLocation';
import useNearbyHospitals from '@/hooks/hospital/useNearbyHospitals';
import useRecommendedHospitals from '@/hooks/hospital/useRecommendedHospitals';
import usePetList from '@/hooks/pet/usePetList';
import type { HospitalSortType } from '@/types/hospital.types';

const HospitalPage = (): React.ReactElement => {
  const [sortType, setSortType] = useState<HospitalSortType>('recommended');
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);

  const { data: pets = [], isPending: isPetListPending } = usePetList();
  const { coordinates, isLocationLoading, isLocationDenied } = useGeoLocation();

  const recommendCoords = sortType === 'recommended' ? coordinates : null;
  const nearbyCoords = sortType === 'distance' ? coordinates : null;

  const { data: recommendData, isLoading: isRecommendLoading } = useRecommendedHospitals({
    petId: selectedPetId,
    coordinates: recommendCoords,
  });
  const { data: nearbyData, isLoading: isNearbyLoading } = useNearbyHospitals({
    coordinates: nearbyCoords,
  });

  const data = sortType === 'recommended' ? recommendData : nearbyData;
  const isLoading =
    isLocationLoading || (sortType === 'recommended' ? isRecommendLoading : isNearbyLoading);

  if (!isPetListPending && pets.length === 0) {
    return <NoPetFallback description="반려견을 등록하고 맞춤 병원을 찾아보세요" />;
  }

  const renderBody = () => {
    if (isLocationDenied) {
      return (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-5 py-20 text-center">
          <p className="subhead3 text-gray-400">위치 권한이 필요해요</p>
          <p className="body2 text-gray-300">
            위치 권한이 있어야 병원 목록을 조회할 수 있습니다.
            <br />
            기기 설정에서 위치 권한을 허용해 주세요.
          </p>
        </div>
      );
    }

    if (sortType === 'recommended' && selectedPetId === null) {
      return (
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-20 text-center">
          <p className="body1 text-gray-300">반려견을 선택하면 맞춤 병원을 추천해드려요</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex flex-1 flex-col items-center justify-center py-20">
          <p className="body1 text-gray-300">병원 정보를 불러오는 중이에요...</p>
        </div>
      );
    }

    if (!data || data.hospitals.length === 0) {
      return (
        <div className="flex flex-1 flex-col items-center justify-center py-20">
          <p className="body1 text-gray-300">주변 병원이 없습니다.</p>
        </div>
      );
    }

    return (
      <div className="mt-1 flex flex-col gap-4 px-5 pb-4">
        {data.hospitals.map((hospital, index) => (
          <HospitalCard key={hospital.hospitalId ?? index} hospital={hospital} />
        ))}
      </div>
    );
  };

  const isDistanceSort = sortType === 'distance';

  return (
    <div className="flex flex-col">
      <div className="bg-gray-0 sticky top-15 z-10">
        {pets.length > 0 && (
          <div className={isDistanceSort ? 'pointer-events-none opacity-40' : undefined}>
            <PetSelector pets={pets} selectedPetId={selectedPetId} onSelect={setSelectedPetId} />
          </div>
        )}
        <div className="mt-6 flex h-11 items-center justify-between px-5">
          <p className="subhead3">
            총 <span className="text-primary">{data?.total ?? 0}</span>개
          </p>
          <Dropdown value={sortType} onChange={setSortType} />
        </div>
      </div>
      {renderBody()}
    </div>
  );
};

export default HospitalPage;
