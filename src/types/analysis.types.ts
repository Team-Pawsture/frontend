export type RiskLevel = 'high' | 'suspicious' | 'uncertain' | 'low_signal';

export interface AnalysisHistoryItem {
  jobId: string;
  petId: number;
  name: string;
  createdAt: string;
  riskLevel: RiskLevel;
  confidenceScore: number;
}
