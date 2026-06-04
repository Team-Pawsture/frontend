'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { AnalysisHistoryCard } from '@/components/analysis';
import { PetSelector } from '@/components/pet';
import useAnalysisHistory from '@/hooks/analysis/useAnalysisHistory';
import usePetList from '@/hooks/pet/usePetList';

const MyPage = (): React.ReactElement => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: pets = [] } = usePetList();

  const selectedPetId = Number(searchParams.get('petId')) || (pets[0]?.petId ?? null);

  const handleSelectPet = (petId: number) => {
    router.replace(`/mypage?petId=${petId}`);
  };

  const selectedPet = pets.find((pet) => pet.petId === selectedPetId);
  const { data: analysisHistory } = useAnalysisHistory(selectedPetId);

  return (
    <div className="flex flex-col gap-6 pb-6">
      <PetSelector
        pets={pets}
        selectedPetId={selectedPetId}
        onSelect={handleSelectPet}
        onAddPet={() => router.push('/pet/new')}
      />
      <div className="flex flex-col gap-3 px-5">
        <div className="flex h-11 items-center justify-between">
          <h2 className="subhead3 text-gray-400">분석 기록</h2>
          {selectedPet && (
            <p className="body2 text-gray-300">
              {selectedPet.name} 총 <span className="text-primary">{analysisHistory.length}</span>건
            </p>
          )}
        </div>
        {analysisHistory.length === 0 ? (
          <p className="body2 py-8 text-center text-gray-300">
            아직 분석 기록이 없어요. 영상을 분석해 보세요!
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {analysisHistory.map((item) => (
              <AnalysisHistoryCard key={item.analysisId} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPage;
