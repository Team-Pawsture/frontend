'use client';

import React, { useEffect, useState } from 'react';

import { AnalysisLoading, MetricCardGrid, SolutionCard } from '@/components/analysis';
import { MOCK_ANALYSIS_RESULT } from '@/mocks';

interface AnalysisDetailPageProps {
  params: Promise<{ jobId: string }>;
}

const AnalysisDetailPage = ({ params }: AnalysisDetailPageProps): React.ReactElement => {
  const { jobId } = React.use(params);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return Math.min(prev + 100, 100);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [jobId]);

  return (
    <div className="flex flex-col px-5">
      {progress === 100 ? (
        <>
          <div className="flex h-35 w-full items-center justify-center rounded-lg bg-gray-100">
            비디오
          </div>
          <h2 className="subhead3 my-2 text-gray-400">분석 요약</h2>
          <MetricCardGrid prediction={MOCK_ANALYSIS_RESULT.prediction} />
          <h2 className="subhead3 my-2 text-gray-400">맞춤 솔루션</h2>
          <div className="mb-3 flex flex-col gap-3">
            {MOCK_ANALYSIS_RESULT.recommendation.action.map((solution, index) => (
              <SolutionCard key={index} step={index + 1} solution={solution} />
            ))}
          </div>
        </>
      ) : (
        <AnalysisLoading petName="뭉치" progress={Math.round(progress)} />
      )}
    </div>
  );
};

export default AnalysisDetailPage;
