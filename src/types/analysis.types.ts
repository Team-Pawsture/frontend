export type RiskLevel = 'low' | 'suspected' | 'high' | 'uncertain';

export type AnalysisStage = 'rear_gate' | 'fusion';

export interface AnalysisRequestParams {
  petId: number;
  videoId: number;
  analysisStage?: AnalysisStage;
  parentAnalysisId?: number;
}

export type MetricCardVariant = 'danger' | 'warning' | 'success' | 'neutral';

export type AnalysisStatus = 'completed' | 'rejected' | 'failed' | 'queued' | 'running';

export interface AnalysisPrediction {
  patellaRisk: {
    decisionCode: string;
    level: string;
  };
  gaitAbnormality: {
    level: string;
    score: number;
  };
  analysisConfidence: {
    level: string;
    score: number;
  };
  recaptureRequired: {
    value: boolean;
  };
}

export interface AnalysisInnerResult {
  decision: string;
  riskLevel: string;
  nextAction?: string;
  message?: string;
  disclaimer?: string;
  displayMetrics: AnalysisPrediction;
  solutions: string[];
}

export interface AnalysisResult {
  analysisId: number;
  petId: number;
  status: AnalysisStatus;
  analysisStage?: AnalysisStage;
  parentAnalysisId?: number;
  videoUrl?: string;
  createdAt: string;
  completedAt?: string;
  error?: string | null;
  result: AnalysisInnerResult | null;
}

export interface AnalysisHistoryItem {
  jobId: string;
  petId: number;
  name: string;
  createdAt: string;
  riskLevel: RiskLevel;
  confidenceScore: number;
}

export interface RecentAnalysisItem {
  analysisId: number;
  petId: number;
  petName: string;
  riskLevel: RiskLevel;
  createdAt: string;
}

export interface PetAnalysisItem {
  analysisId: number;
  petId: number;
  riskLevel: RiskLevel;
  createdAt: string;
  confidenceScore?: number;
}

export interface PetAnalysisListResponse {
  items: AnalysisResult[];
  total: number;
  limit: number;
  offset: number;
}

export interface Keypoint {
  keypointName: string;
  canonicalName: string;
  keypointIndex: number | null;
  x: number | null;
  y: number | null;
  confidence: number;
}

export interface KeypointFrame {
  frameIndex: number;
  keypoints: Keypoint[];
}

export interface KeypointsResponse {
  jobId: string;
  parentJobId: string;
  source: string;
  totalFrameCount: number;
  returnedFrameCount: number;
  totalKeypointCount: number;
  returnedKeypointCount: number;
  truncated: boolean;
  frames: KeypointFrame[];
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
  analysisStage: AnalysisStage;
  createdAt: string;
}
