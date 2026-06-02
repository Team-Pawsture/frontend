import { useQuery } from '@tanstack/react-query';

import { getRecentAnalyses } from '@/apis/analysis';
import type { RecentAnalysisItem } from '@/types/analysis.types';

type UseRecentAnalysesReturn = {
  data: RecentAnalysisItem[];
  isLoading: boolean;
};

const useRecentAnalyses = (): UseRecentAnalysesReturn => {
  const { data = [], isLoading } = useQuery({
    queryKey: ['analyses', 'recent'],
    queryFn: getRecentAnalyses,
  });
  return { data, isLoading };
};

export default useRecentAnalyses;
