import type { AnalysisHistoryItem } from '@/types/analysis.types';

export const MOCK_ANALYSIS_HISTORY_LIST: AnalysisHistoryItem[] = [
  {
    jobId: 'job_1',
    petId: 2,
    name: '뭉치',
    createdAt: '2026-05-19T17:00:00+09:00',
    riskLevel: 'high',
    confidenceScore: 94,
  },
  {
    jobId: 'job_2',
    petId: 1,
    name: '두부',
    createdAt: '2026-05-18T17:00:00+09:00',
    riskLevel: 'suspicious',
    confidenceScore: 91,
  },
  {
    jobId: 'job_3',
    petId: 1,
    name: '두부',
    createdAt: '2026-05-17T17:00:00+09:00',
    riskLevel: 'uncertain',
    confidenceScore: 85,
  },
  {
    jobId: 'job_4',
    petId: 2,
    name: '뭉치',
    createdAt: '2026-05-16T17:00:00+09:00',
    riskLevel: 'suspicious',
    confidenceScore: 89,
  },
  {
    jobId: 'job_5',
    petId: 2,
    name: '뭉치',
    createdAt: '2026-05-15T17:00:00+09:00',
    riskLevel: 'low_signal',
    confidenceScore: 92,
  },
];
