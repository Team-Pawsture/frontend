export type RiskLevel = 'high' | 'suspicious' | 'uncertain' | 'low_signal';

export type MetricCardVariant = 'danger' | 'warning' | 'success' | 'neutral';

export type AnalysisStatus = 'completed' | 'rejected' | 'failed' | 'queued' | 'running';

export interface AnalysisHistoryItem {
  jobId: string;
  petId: number;
  name: string;
  createdAt: string;
  riskLevel: RiskLevel;
  confidenceScore: number;
}

export interface AnalysisResult {
  analysisId: number;
  petId: number;
  status: AnalysisStatus;
  prediction: {
    riskLevel: RiskLevel; // 슬개골 위험도
    confidenceScore: number | null; // 신뢰도 점수
    isUncertain: boolean; // 재촬영 권장 여부
    suspiciousSignalScore: number; // 의심 신호 점수
    abnormalSignalScore: number; // 이상 신호 점수
  };
  recommendation: {
    summary: string; // 분석 요약
    action: string[]; // 맞춤 솔루션
  };
}
