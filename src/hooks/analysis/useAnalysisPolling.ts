import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { getAnalysis } from '@/apis/analysis';
import type { AnalysisResult, AnalysisStatus } from '@/types/analysis.types';

const TERMINAL_STATUSES = new Set<AnalysisStatus>(['completed', 'rejected', 'failed']);

const useAnalysisPolling = (analysisId: number): UseQueryResult<AnalysisResult> =>
  useQuery({
    queryKey: ['analysis', analysisId],
    queryFn: async () => {
      const result = await getAnalysis(analysisId);
      return result;
    },
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      return status && TERMINAL_STATUSES.has(status) ? false : 2500;
    },
    enabled: !isNaN(analysisId) && analysisId > 0,
  });

export default useAnalysisPolling;
