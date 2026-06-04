'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

import { FilmingTip, VideoUploader } from '@/components/analysis';
import { Button } from '@/components/common';
import { NoPetFallback, PetSelector } from '@/components/pet';
import useSubmitAnalysis from '@/hooks/analysis/useSubmitAnalysis';
import usePetList from '@/hooks/pet/usePetList';
import type { AnalysisStage } from '@/types/analysis.types';

const AnalysisForm = (): React.ReactElement => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: pets = [] } = usePetList();

  const parentAnalysisIdParam = searchParams.get('parentAnalysisId');
  const petIdParam = searchParams.get('petId');
  const isFusionStage = parentAnalysisIdParam !== null;
  const parentAnalysisId = parentAnalysisIdParam ? Number(parentAnalysisIdParam) : undefined;
  const analysisStage: AnalysisStage | undefined = isFusionStage ? 'fusion' : undefined;

  const [selectedPetId, setSelectedPetId] = useState<number | null>(
    petIdParam ? Number(petIdParam) : null,
  );
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const { mutate: submitAnalysis, isPending } = useSubmitAnalysis();

  const isSubmitDisabled = selectedPetId === null || videoFile === null || isPending;

  const handleAnalyze = () => {
    if (selectedPetId === null || videoFile === null) return;

    submitAnalysis(
      { petId: selectedPetId, videoFile, analysisStage, parentAnalysisId },
      {
        onSuccess: ({ analysisId }) => {
          router.push(`/analysis/${analysisId}?fromSubmit=true`);
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
        {isFusionStage && (
          <p className="body2 rounded-lg bg-yellow-50 px-4 py-3 text-yellow-600">
            정확한 분석을 위해 측면 영상이 필요합니다. 측면 산책 영상을 업로드해 주세요.
          </p>
        )}
        <VideoUploader file={videoFile} onFileChange={setVideoFile} />
        {!isFusionStage && <FilmingTip />}
        <Button
          label={isFusionStage ? '영상 추가 분석하기' : '영상 분석하기'}
          onClick={handleAnalyze}
          isDisabled={isSubmitDisabled}
        />
      </div>
    </div>
  );
};

const AnalysisPage = (): React.ReactElement => (
  <Suspense>
    <AnalysisForm />
  </Suspense>
);

export default AnalysisPage;
