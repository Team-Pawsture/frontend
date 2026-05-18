export type RiskLevel = 'high' | 'suspicious' | 'uncertain' | 'low_signal';

export interface AnalysisHistoryItem {
  job_id: string;
  pet_id: number;
  name: string;
  created_at: string;
  risk_level: RiskLevel;
}
