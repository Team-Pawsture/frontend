import type { RiskLevel } from '@/types/analysis.types';

export const RISK_LEVEL_LABEL: Record<RiskLevel, string> = {
  high: '위험',
  suspicious: '주의',
  uncertain: '재촬영 권장',
  low_signal: '정상',
};

export const RISK_LEVEL_STYLE: Record<RiskLevel, string> = {
  high: 'bg-red-100 text-red-300 border-red-200',
  suspicious: 'bg-yellow-100 text-yellow-300 border-yellow-200',
  uncertain: 'bg-gray-100 text-gray-300 border-gray-200',
  low_signal: 'bg-green-100 text-green-300 border-green-200',
};
