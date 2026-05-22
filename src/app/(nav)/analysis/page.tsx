'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { FilmingTip, VideoUploader } from '@/components/analysis';
import { Button } from '@/components/common';
import { PetSelector } from '@/components/pet';
import usePetList from '@/hooks/pet/usePetList';

const AnalysisPage = (): React.ReactElement => {
  const router = useRouter();
  const { data: pets = [] } = usePetList();
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const isSubmitDisabled = selectedPetId === null || videoFile === null;

  const handleAnalyze = () => {
    const jobId = 'mock-job-id';
    router.push(`/analysis/${jobId}`);
  };

  if (pets.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-5 px-5">
        <div className="flex flex-col items-center gap-1.5">
          <p className="subhead3 text-gray-400">아직 등록된 반려견이 없어요</p>
          <p className="body2 text-gray-300">반려견을 등록하고 걸음 분석을 시작해보세요</p>
        </div>
        <Link
          href="/pet/new"
          className="body1 text-primary border-primary rounded-full border px-7 py-2.5"
        >
          등록하러 가기
        </Link>
      </div>
    );
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
