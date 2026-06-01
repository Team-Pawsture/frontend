export type RiskLevel = 'high' | 'suspicious' | 'uncertain' | 'low_signal';

export type MetricCardVariant = 'danger' | 'warning' | 'success' | 'neutral';

export type AnalysisStatus = 'completed' | 'rejected' | 'failed' | 'queued' | 'running';

export interface AnalysisPrediction {
  decision: string;
  riskLevel: RiskLevel;
  isUncertain: boolean;
  displayMetrics: {
    analysisConfidenceScore: number | null;
  };
}

export interface AnalysisQuality {
  isAnalyzable: boolean;
  score: number | null;
  warnings: string[];
  recaptureRequired: boolean;
  recaptureReasons: string[];
}

export interface AnalysisRecommendation {
  summary: string;
  action: string;
  disclaimer: string;
}

export interface AnalysisResult {
  analysisId: number;
  petId: number;
  status: AnalysisStatus;
  progress?: {
    step: string;
    description: string;
  };
  prediction: AnalysisPrediction | null;
  gaitObservationSummary: string | null;
  quality?: AnalysisQuality;
  recommendation?: AnalysisRecommendation;
  errorMessage?: string;
}

export interface AnalysisHistoryItem {
  jobId: string;
  petId: number;
  name: string;
  createdAt: string;
  riskLevel: RiskLevel;
  confidenceScore: number;
}

export interface VideoUploadResult {
  videoId: number;
  videoUrl: string;
  uploadedAt: string;
}

export interface AnalysisCreateResult {
  analysisId: number;
  petId: number;
  status: AnalysisStatus;
  createdAt: string;
}
