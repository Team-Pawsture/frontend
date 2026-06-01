import { METRIC_CARD_VARIANT_COLOR } from '@/constants/analysis';
import type { MetricCardVariant } from '@/types/analysis.types';
import { cn } from '@/utils/cn';

type MetricCardProps = {
  label: string;
  value: string;
  variant?: MetricCardVariant;
  score?: string;
};

export const MetricCard = ({
  label,
  value,
  variant = 'neutral',
  score,
}: MetricCardProps): React.ReactElement => {
  const valueColor = METRIC_CARD_VARIANT_COLOR[variant];

  return (
    <section className="flex flex-col items-center justify-center gap-1 rounded-(--radius-md) bg-gray-100 px-4 py-3">
      <h4 className="body1 text-center text-gray-600">{label}</h4>
      <p className={cn('title2', valueColor)}>{value}</p>
      {score && <p className={cn('body2', valueColor)}>{score}</p>}
    </section>
  );
};
