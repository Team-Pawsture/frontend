import { RISK_LEVEL_LABEL, RISK_LEVEL_VARIANT } from '@/constants/analysis';
import type { AnalysisResult } from '@/types/analysis.types';

import { MetricCard } from './MetricCard';

type MetricCardGridProps = {
  prediction: AnalysisResult['prediction'];
};

export const MetricCardGrid = ({ prediction }: MetricCardGridProps): React.ReactElement => {
  const { riskLevel, isUncertain, confidenceScore, suspiciousSignalScore, abnormalSignalScore } =
    prediction;

  const isSuspiciousDominant = suspiciousSignalScore > abnormalSignalScore;
  const dominantSignalLabel = isSuspiciousDominant ? '보행 이상 의심' : '보행 이상 감지';
  const dominantSignalScore = isSuspiciousDominant ? suspiciousSignalScore : abnormalSignalScore;
  const dominantSignalVariant = isSuspiciousDominant ? 'warning' : ('danger' as const);

  return (
    <div className="grid grid-cols-2 gap-4">
      <MetricCard
        label="슬개골 위험도"
        value={RISK_LEVEL_LABEL[riskLevel]}
        variant={RISK_LEVEL_VARIANT[riskLevel]}
      />
      <MetricCard
        label="재촬영 권장"
        value={isUncertain ? '필요' : '불필요'}
        variant={isUncertain ? 'warning' : 'success'}
      />
      <MetricCard
        label="분석 신뢰도"
        value={confidenceScore === null ? '판단 불가' : confidenceScore >= 50 ? '높음' : '낮음'}
        variant={
          confidenceScore === null ? 'neutral' : confidenceScore >= 50 ? 'success' : 'warning'
        }
        score={confidenceScore !== null ? `${confidenceScore}%` : undefined}
      />
      <MetricCard
        label={dominantSignalLabel}
        value={dominantSignalScore >= 50 ? '높음' : '낮음'}
        variant={dominantSignalVariant}
        score={`${dominantSignalScore}%`}
      />
    </div>
  );
};
