import { Chip } from '@/components/common/Chip';
import { RISK_LEVEL_LABEL, RISK_LEVEL_STYLE } from '@/constants/analysis';
import type { RecentAnalysisItem } from '@/types/analysis.types';
import { formatDate } from '@/utils/formatDate';

interface RecentAnalysisCardProps {
  item: RecentAnalysisItem;
  onClick: () => void;
}

export const RecentAnalysisCard = ({
  item,
  onClick,
}: RecentAnalysisCardProps): React.ReactElement => {
  const { petName, createdAt, riskLevel } = item;

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gray-0 shadow-card flex w-full items-center justify-between rounded-(--radius-md) px-4 py-3 text-left"
    >
      <div className="flex flex-col gap-0.5">
        <h3 className="subhead3 text-gray-400">{petName}</h3>
        <p className="body2 text-gray-300">{formatDate(createdAt)}</p>
      </div>
      <Chip label={RISK_LEVEL_LABEL[riskLevel]} className={RISK_LEVEL_STYLE[riskLevel]} />
    </button>
  );
};
