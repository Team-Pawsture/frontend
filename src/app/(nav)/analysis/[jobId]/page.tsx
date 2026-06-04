'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

import {
  AnalysisLoading,
  AnalysisVideoPlayer,
  MetricCardGrid,
  SolutionCard,
} from '@/components/analysis';
import { Button } from '@/components/common';
import useAnalysisPolling from '@/hooks/analysis/useAnalysisPolling';
import usePetList from '@/hooks/pet/usePetList';

const SIDE_UPLOAD_DECISIONS = new Set(['SIDE_UPLOAD_REQUIRED', 'SIDE_UPLOAD_RECOMMENDED']);

const AnalysisDetailPage = (): React.ReactElement | null => {
  const router = useRouter();
  const pathname = usePathname();
  const analysisId = Number(pathname?.split('/').at(-1));

  const isValidId = !isNaN(analysisId) && analysisId > 0;

  useEffect(() => {
    if (!isValidId) router.replace('/');
  }, [isValidId, router]);

  const [isFromSubmit] = useState(
    () =>
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('fromSubmit') === 'true',
  );

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
      setProgress((prev) => Math.min(prev + 15, 95));
    }, 1000);
    return () => clearInterval(interval);
  }, [result?.status]);

  useEffect(() => {
    if (!result || hasAlerted.current) return;

    if (result.status === 'rejected') {
      hasAlerted.current = true;
      alert(result.error ?? '영상 품질 문제로 분석이 거절되었습니다.');
      router.replace('/');
    }

    if (result.status === 'failed') {
      hasAlerted.current = true;
      alert('분석 중 오류가 발생했습니다. 다시 시도해 주세요.');
      router.replace('/');
    }
  }, [result, router]);

  if (
    result?.status === 'queued' ||
    result?.status === 'running' ||
    (isFromSubmit && (isPending || !result))
  ) {
    return (
      <div className="flex flex-col px-5">
        <AnalysisLoading petName={petName} progress={progress} />
      </div>
    );
  }

  if (isPending || !result) return null;

  if (result.status === 'completed' && result.result) {
    const { displayMetrics, message, solutions } = result.result;
    const decisionCode = displayMetrics.patellaRisk.decisionCode;
    const needsSideUpload = SIDE_UPLOAD_DECISIONS.has(decisionCode);
    const isFusionResult = result.analysisStage === 'fusion';

    return (
      <div className="flex flex-col px-5">
        {result.videoUrl && (
          <AnalysisVideoPlayer
            videoUrl={`${process.env.NEXT_PUBLIC_API_BASE_URL}${result.videoUrl}`}
            analysisId={analysisId}
          />
        )}
        <h2 className="subhead3 my-2 text-gray-400">분석 요약</h2>
        <MetricCardGrid prediction={displayMetrics} />
        {needsSideUpload && isFromSubmit && (
          <>
            <p className="body2 my-4 rounded-lg bg-yellow-50 px-4 pb-3 text-yellow-300">
              {decisionCode === 'SIDE_UPLOAD_REQUIRED'
                ? '정확한 분석을 위해 측면 영상이 필요합니다. 측면 산책 영상을 업로드해 주세요.'
                : '더 정확한 분석을 위해 측면 영상 업로드를 권장합니다.'}
            </p>
            <Button
              label="영상 추가 업로드하기"
              onClick={() =>
                router.push(`/analysis?parentAnalysisId=${analysisId}&petId=${result.petId}`)
              }
            />
          </>
        )}
        {isFusionResult && (
          <>
            <h2 className="subhead3 mb-2 text-gray-400">보행 관찰 결과</h2>
            {message && (
              <p className="body2 rounded-lg bg-yellow-100 px-4 py-3 text-yellow-300">{message}</p>
            )}
            <h2 className="subhead3 my-2 text-gray-400">맞춤 솔루션</h2>
            <div className="mb-3 flex flex-col gap-3">
              {solutions.map((solution, index) => (
                <SolutionCard key={index} step={index + 1} solution={solution} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return <></>;
};

export default AnalysisDetailPage;
