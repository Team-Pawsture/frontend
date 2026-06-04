import type { MetricCardVariant, RiskLevel } from '@/types/analysis.types';

export const RISK_LEVEL_LABEL: Record<RiskLevel, string> = {
  low: '정상',
  suspected: '주의',
  high: '위험',
  uncertain: '재촬영 권장',
};

export const RISK_LEVEL_STYLE: Record<RiskLevel, string> = {
  low: 'bg-green-100 text-green-300 border-green-200',
  suspected: 'bg-yellow-100 text-yellow-300 border-yellow-200',
  high: 'bg-red-100 text-red-300 border-red-200',
  uncertain: 'bg-gray-100 text-gray-300 border-gray-200',
};

export const METRIC_CARD_VARIANT_COLOR: Record<MetricCardVariant, string> = {
  danger: 'text-danger',
  warning: 'text-warning',
  success: 'text-success',
  neutral: 'text-gray-300',
};

export const PATELLA_RISK_LABEL: Record<string, string> = {
  low: '정상',
  moderate: '주의',
  high: '위험',
  recapture: '재촬영 필요',
  uncertain: '판단 불가',
};

export const PATELLA_RISK_VARIANT: Record<string, MetricCardVariant> = {
  low: 'success',
  moderate: 'warning',
  high: 'danger',
  recapture: 'neutral',
  uncertain: 'neutral',
};

export const CONFIDENCE_LEVEL_LABEL: Record<string, string> = {
  low: '낮음',
  medium: '보통',
  high: '높음',
};

export const CONFIDENCE_LEVEL_VARIANT: Record<string, MetricCardVariant> = {
  low: 'warning',
  medium: 'neutral',
  high: 'success',
};
