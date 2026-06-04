import Link from 'next/link';
import React from 'react';

import { Chip } from '@/components/common/Chip';
import { RISK_LEVEL_LABEL, RISK_LEVEL_STYLE } from '@/constants/analysis';
import type { PetAnalysisItem } from '@/types/analysis.types';
import { formatDate } from '@/utils/formatDate';

interface AnalysisHistoryCardProps {
  item: PetAnalysisItem;
}

export const AnalysisHistoryCard = ({ item }: AnalysisHistoryCardProps): React.ReactElement => {
  const { analysisId, createdAt, riskLevel, confidenceScore } = item;

  return (
    <Link href={`/analysis/${analysisId}`}>
      <div className="bg-gray-0 shadow-card flex items-center justify-between rounded-(--radius-md) px-4 py-3">
        <div className="flex flex-col gap-0.5">
          <p className="subhead3 text-gray-400">{formatDate(createdAt)}</p>
          {confidenceScore !== undefined && (
            <p className="body2 text-gray-300">보행 의심 {confidenceScore}%</p>
          )}
        </div>
        <Chip label={RISK_LEVEL_LABEL[riskLevel]} className={RISK_LEVEL_STYLE[riskLevel]} />
      </div>
    </Link>
  );
};
