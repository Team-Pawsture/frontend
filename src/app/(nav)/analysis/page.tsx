'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { FilmingTip, VideoUploader } from '@/components/analysis';
import { Button } from '@/components/common';
import { PetSelector } from '@/components/pet';
import { MOCK_PET_LIST } from '@/mocks';

const AnalysisPage = (): React.ReactElement => {
  const router = useRouter();
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const isSubmitDisabled = selectedPetId === null || videoFile === null;

  const handleAnalyze = () => {
    const jobId = 'mock-job-id';
    router.push(`/analysis/${jobId}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <PetSelector pets={MOCK_PET_LIST} selectedPetId={selectedPetId} onSelect={setSelectedPetId} />
      <div className="flex flex-col gap-6 px-5">
        <VideoUploader file={videoFile} onFileChange={setVideoFile} />
        <FilmingTip />
        <Button label="영상 분석하기" onClick={handleAnalyze} isDisabled={isSubmitDisabled} />
      </div>
    </div>
  );
};

export default AnalysisPage;
