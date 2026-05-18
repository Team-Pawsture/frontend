import { RISK_LEVEL_LABEL, RISK_LEVEL_STYLE } from '@/constants/analysis';
import type { RiskLevel } from '@/types/analysis.types';
import { cn } from '@/utils/cn';

interface ChipProps {
  risk_level: RiskLevel;
}

export const Chip = ({ risk_level }: ChipProps) => {
  return (
    <div className={cn('body2 rounded-full border px-3 py-1', RISK_LEVEL_STYLE[risk_level])}>
      {RISK_LEVEL_LABEL[risk_level]}
    </div>
  );
};
