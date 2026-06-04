import {
  CONFIDENCE_LEVEL_LABEL,
  CONFIDENCE_LEVEL_VARIANT,
  PATELLA_RISK_LABEL,
  PATELLA_RISK_VARIANT,
} from '@/constants/analysis';
import type { AnalysisPrediction } from '@/types/analysis.types';

import { MetricCard } from './MetricCard';

type MetricCardGridProps = {
  prediction: AnalysisPrediction;
};

export const MetricCardGrid = ({ prediction }: MetricCardGridProps): React.ReactElement => {
  const { patellaRisk, analysisConfidence, recaptureRequired, gaitAbnormality } = prediction;

  return (
    <div className="mb-3 grid grid-cols-2 gap-4">
      <MetricCard
        label="슬개골 위험도"
        value={PATELLA_RISK_LABEL[patellaRisk.level] ?? patellaRisk.level}
        variant={PATELLA_RISK_VARIANT[patellaRisk.level] ?? 'neutral'}
      />
      <MetricCard
        label="재촬영 권장"
        value={recaptureRequired.value ? '필요' : '불필요'}
        variant={recaptureRequired.value ? 'danger' : 'success'}
      />
      <MetricCard
        label="분석 신뢰도"
        value={CONFIDENCE_LEVEL_LABEL[analysisConfidence.level] ?? analysisConfidence.level}
        variant={CONFIDENCE_LEVEL_VARIANT[analysisConfidence.level] ?? 'neutral'}
        score={`${analysisConfidence.score}%`}
      />
      <MetricCard
        label="보행 이상 의심"
        value={PATELLA_RISK_LABEL[gaitAbnormality.level] ?? gaitAbnormality.level}
        variant={PATELLA_RISK_VARIANT[gaitAbnormality.level] ?? 'neutral'}
        score={`${gaitAbnormality.score}%`}
      />
    </div>
  );
};
