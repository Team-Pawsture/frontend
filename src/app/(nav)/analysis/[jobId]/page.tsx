'use client';

import React from 'react';

interface AnalysisDetailPageProps {
  params: Promise<{ jobId: string }>;
}

const AnalysisDetailPage = ({ params }: AnalysisDetailPageProps): React.ReactElement => {
  const { jobId } = React.use(params);

  return <div>AnalysisDetailPage</div>;
};

export default AnalysisDetailPage;
