import { useQuery, useQueryClient, type UseQueryResult } from '@tanstack/react-query';

import { getAnalysis } from '@/apis/analysis';
import type { AnalysisResult, AnalysisStatus } from '@/types/analysis.types';

const TERMINAL_STATUSES = new Set<AnalysisStatus>(['completed', 'rejected', 'failed']);

const useAnalysisPolling = (analysisId: number): UseQueryResult<AnalysisResult> => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['analysis', analysisId],
    queryFn: async () => {
      const result = await getAnalysis(analysisId);
      if (TERMINAL_STATUSES.has(result.status)) {
        queryClient.invalidateQueries({ queryKey: ['analyses', 'recent'] });
      }
      return result;
    },
    refetchInterval: (query) => {
      if (query.state.error) return false;
      const status = query.state.data?.status;
      return status && TERMINAL_STATUSES.has(status) ? false : 2500;
    },
    enabled: !isNaN(analysisId) && analysisId > 0,
  });
};

export default useAnalysisPolling;
