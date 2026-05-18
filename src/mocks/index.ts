import type { AnalysisHistoryItem } from '@/types/analysis.types';

export const MOCK_ANALYSIS_HISTORY_LIST: AnalysisHistoryItem[] = [
  {
    job_id: 'job_1',
    pet_id: 1,
    name: '뭉치',
    created_at: '2026-05-19T17:00:00+09:00',
    risk_level: 'high',
  },
  {
    job_id: 'job_2',
    pet_id: 2,
    name: '두부',
    created_at: '2026-05-18T17:00:00+09:00',
    risk_level: 'suspicious',
  },
  {
    job_id: 'job_3',
    pet_id: 2,
    name: '두부',
    created_at: '2026-05-17T17:00:00+09:00',
    risk_level: 'uncertain',
  },
  {
    job_id: 'job_4',
    pet_id: 1,
    name: '뭉치',
    created_at: '2026-05-16T17:00:00+09:00',
    risk_level: 'suspicious',
  },
  {
    job_id: 'job_5',
    pet_id: 1,
    name: '뭉치',
    created_at: '2026-05-15T17:00:00+09:00',
    risk_level: 'low_signal',
  },
];
