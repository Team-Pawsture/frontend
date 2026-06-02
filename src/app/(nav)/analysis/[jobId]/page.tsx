'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

import { AnalysisLoading, MetricCardGrid } from '@/components/analysis';
import useAnalysisPolling from '@/hooks/analysis/useAnalysisPolling';
import usePetList from '@/hooks/pet/usePetList';

interface AnalysisDetailPageProps {
  params: Promise<{ jobId: string }>;
}

const AnalysisDetailPage = ({ params }: AnalysisDetailPageProps): React.ReactElement | null => {
  const router = useRouter();
  const { jobId } = React.use(params);
  const analysisId = Number(jobId);

  const isValidId = !isNaN(analysisId) && analysisId > 0;

  useEffect(() => {
    if (!isValidId) router.replace('/');
  }, [isValidId, router]);

  const { data: result, isPending } = useAnalysisPolling(analysisId);
  const { data: pets = [] } = usePetList();

  const petName = pets.find((pet) => pet.petId === result?.petId)?.name ?? '반려견';

  const [progress, setProgress] = useState(0);
  const hasAlerted = useRef(false);

  useEffect(() => {
    if (
      result?.status === 'completed' ||
      result?.status === 'rejected' ||
      result?.status === 'failed'
    ) {
      return;
    }
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 30, 95));
    }, 1000);
    return () => clearInterval(interval);
  }, [result?.status]);

  useEffect(() => {
    if (!result || hasAlerted.current) return;

    if (result.status === 'rejected') {
      hasAlerted.current = true;
      const reasons =
        result.quality?.recaptureReasons.join('\n') || '영상 품질 문제로 분석이 거절되었습니다.';
      alert(reasons);
      router.replace('/');
    }

    if (result.status === 'failed') {
      hasAlerted.current = true;
      alert('분석 중 오류가 발생했습니다. 다시 시도해 주세요.');
      router.replace('/');
    }
  }, [result, router]);

  if (isPending || !result) return null;

  if (result?.status === 'queued' || result?.status === 'running') {
    return (
      <div className="flex flex-col px-5">
        <AnalysisLoading petName={petName} progress={progress} />
      </div>
    );
  }

  if (result.status === 'completed' && result.prediction) {
    return (
      <div className="flex flex-col px-5">
        <div className="flex h-35 w-full items-center justify-center rounded-lg bg-gray-100">
          비디오
        </div>
        <h2 className="subhead3 my-2 text-gray-400">분석 요약</h2>
        <MetricCardGrid prediction={result.prediction} />
        <h2 className="subhead3 my-2 text-gray-400">보행 관찰 결과</h2>
        {result.gaitObservationSummary && (
          <p className="body2 rounded-lg bg-gray-100 px-4 py-3 text-gray-400">
            {result.gaitObservationSummary}
          </p>
        )}
      </div>
    );
  }

  return <></>;
};

export default AnalysisDetailPage;
