import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { getKeypoints } from '@/apis/analysis';
import type { KeypointsResponse } from '@/types/analysis.types';

const useKeypoints = (analysisId: number): UseQueryResult<KeypointsResponse> =>
  useQuery({
    queryKey: ['keypoints', analysisId],
    queryFn: () => getKeypoints(analysisId),
    enabled: analysisId > 0,
  });

export default useKeypoints;
