import React from 'react';

import { Chip } from '@/components/common/Chip';
import { RISK_LEVEL_LABEL, RISK_LEVEL_STYLE } from '@/constants/analysis';
import type { AnalysisHistoryItem } from '@/types/analysis.types';
import { formatDate } from '@/utils/formatDate';

interface AnalysisHistoryCardProps {
  item: AnalysisHistoryItem;
}

export const AnalysisHistoryCard = ({ item }: AnalysisHistoryCardProps): React.ReactElement => {
  const { createdAt, riskLevel, confidenceScore } = item;

  return (
    <div className="bg-gray-0 shadow-card flex items-center justify-between rounded-(--radius-md) px-4 py-3">
      <div className="flex flex-col gap-0.5">
        <p className="subhead6 text-gray-400">{formatDate(createdAt)}</p>
        <p className="body3 text-gray-300">신뢰도 {confidenceScore}%</p>
      </div>
      <Chip label={RISK_LEVEL_LABEL[riskLevel]} className={RISK_LEVEL_STYLE[riskLevel]} />
    </div>
  );
};
