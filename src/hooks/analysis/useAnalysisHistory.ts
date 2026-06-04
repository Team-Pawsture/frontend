import { useQuery } from '@tanstack/react-query';

import { getAnalysesByPet } from '@/apis/analysis';
import type { PetAnalysisItem, RiskLevel } from '@/types/analysis.types';

type UseAnalysisHistoryReturn = {
  data: PetAnalysisItem[];
  isLoading: boolean;
};

const useAnalysisHistory = (petId: number | null): UseAnalysisHistoryReturn => {
  const { data, isLoading } = useQuery({
    queryKey: ['analyses', 'byPet', petId],
    queryFn: () => getAnalysesByPet(petId!),
    enabled: petId !== null,
  });

  const items: PetAnalysisItem[] = (data ?? []).map((item) => ({
    analysisId: item.analysisId,
    petId: item.petId,
    riskLevel: (item.result?.riskLevel ?? 'uncertain') as RiskLevel,
    createdAt: item.createdAt,
    confidenceScore: item.result?.displayMetrics?.gaitAbnormality?.score,
  }));

  return { data: items, isLoading };
};

export default useAnalysisHistory;
