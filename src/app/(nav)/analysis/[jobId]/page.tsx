'use client';

import React, { useEffect, useState } from 'react';

import { AnalysisLoading } from '@/components/analysis';

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
        return Math.min(prev + 10, 100);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [jobId]);

  return (
    <div>
      {progress === 100 ? (
        <p>분석 완료</p>
      ) : (
        <AnalysisLoading petName="뭉치" progress={Math.round(progress)} />
      )}
    </div>
  );
};

export default AnalysisDetailPage;
