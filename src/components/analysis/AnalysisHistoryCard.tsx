import type { AnalysisHistoryItem } from '@/types/analysis.types';
import { formatDate } from '@/utils/formatDate';

import { Chip } from './Chip';

interface AnalysisHistoryCardProps {
  history: AnalysisHistoryItem;
}

export const AnalysisHistoryCard = ({ history }: AnalysisHistoryCardProps) => {
  const { name, created_at, risk_level } = history;

  return (
    <div className="bg-gray-0 flex w-full items-center justify-between rounded-(--radius-md) border border-gray-200 px-4 py-3">
      <div className="flex flex-col gap-0.5">
        <h3 className="subhead6 text-gray-400">{name}</h3>
        <p className="body3 text-gray-300">{formatDate(created_at)}</p>
      </div>
      <Chip risk_level={risk_level} />
    </div>
  );
};
