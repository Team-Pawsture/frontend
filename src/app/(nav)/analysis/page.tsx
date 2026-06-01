'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { FilmingTip, VideoUploader } from '@/components/analysis';
import { Button } from '@/components/common';
import { NoPetFallback, PetSelector } from '@/components/pet';
import useSubmitAnalysis from '@/hooks/analysis/useSubmitAnalysis';
import usePetList from '@/hooks/pet/usePetList';

const AnalysisPage = (): React.ReactElement => {
  const router = useRouter();
  const { data: pets = [] } = usePetList();
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const { mutate: submitAnalysis, isPending } = useSubmitAnalysis();

  const isSubmitDisabled = selectedPetId === null || videoFile === null || isPending;

  const handleAnalyze = () => {
    if (selectedPetId === null || videoFile === null) return;

    submitAnalysis(
      { petId: selectedPetId, videoFile },
      {
        onSuccess: ({ analysisId }) => {
          router.push(`/analysis/${analysisId}`);
        },
      },
    );
  };

  if (pets.length === 0) {
    return <NoPetFallback description="반려견을 등록하고 걸음 분석을 시작해보세요" />;
  }

  return (
    <div className="flex flex-col gap-6">
      <PetSelector pets={pets} selectedPetId={selectedPetId} onSelect={setSelectedPetId} />
      <div className="flex flex-col gap-6 px-5">
        <VideoUploader file={videoFile} onFileChange={setVideoFile} />
        <FilmingTip />
        <Button label="영상 분석하기" onClick={handleAnalyze} isDisabled={isSubmitDisabled} />
      </div>
    </div>
  );
};

export default AnalysisPage;
