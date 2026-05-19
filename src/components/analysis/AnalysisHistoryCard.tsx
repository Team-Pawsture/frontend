import { Chip } from '@/components/common/Chip';
import { RISK_LEVEL_LABEL, RISK_LEVEL_STYLE } from '@/constants/analysis';
import type { AnalysisHistoryItem } from '@/types/analysis.types';
import { formatDate } from '@/utils/formatDate';

interface AnalysisHistoryCardProps {
  history: AnalysisHistoryItem;
}

export const AnalysisHistoryCard = ({ history }: AnalysisHistoryCardProps) => {
  const { name, createdAt, riskLevel } = history;

  return (
    <div className="bg-gray-0 flex w-full items-center justify-between rounded-(--radius-md) border border-gray-200 px-4 py-3">
      <div className="flex flex-col gap-0.5">
        <h3 className="subhead6 text-gray-400">{name}</h3>
        <p className="body3 text-gray-300">{formatDate(createdAt)}</p>
      </div>
      <Chip label={RISK_LEVEL_LABEL[riskLevel]} className={RISK_LEVEL_STYLE[riskLevel]} />
    </div>
  );
};
